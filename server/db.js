// Generated by CoffeeScript 1.10.0
(function() {
  var Daytimer, Question, d, exports, h, models, mongoose, tag;

  tag = "db:%s =>";

  mongoose = require("mongoose");

  models = require("./models");

  Question = mongoose.model("Question");

  Daytimer = mongoose.model("Daytimer");

  h = {};

  h.get = function(schema) {
    return function(req, res) {
      var send;
      send = function(err, data) {
        if (err) {
          console.log(tag, "get-error", err);
          res.send(400);
          return res.end();
        } else {
          res.jsonp(data);
          return res.end();
        }
      };
      return schema.find().exec(send);
    };
  };

  h.add = function(schema) {
    return function(req, res) {
      return schema.create(req.body, function(err, s) {
        if (err) {
          res.sendStatus(400);
          res.end();
          return console.log(tag, "add:err", err);
        } else {
          res.jsonp(s);
          return res.end();
        }
      });
    };
  };

  h.update = function(schema) {
    return function(req, res) {
      var data, id;
      data = req.body;
      id = data._id;
      delete data._id;
      return schema.update({
        _id: req.params.id
      }, req.body, {
        upsert: true
      }, (function(_this) {
        return function(err, raw) {
          if (err) {
            console.log(tag, "update", err);
            return res.status(400).end();
          } else {
            console.log(tag, "update success! raw: ", raw);
            return res.status(200).end();
          }
        };
      })(this));
    };
  };

  h["delete"] = function(schema) {
    return function(req, res) {
      return schema.remove({
        _id: req.params.id
      }, function(err) {
        if (err) {
          res.send(err);
          return res.status(400).end();
        } else {
          console.log("deleted", req.params.id);
          return res.status(200).end();
        }
      });
    };
  };

  d = (function(_this) {
    return function(app) {
      app.get("/data/trackers", h.get(Question));
      app.post("/data/trackers", h.add(Question));
      app.put("/data/trackers/:id", h.update(Question));
      app["delete"]("/data/trackers/:id", h["delete"](Question));
      app.get("/data/daytimers", h.get(Daytimer));
      app.post("/data/daytimers", h.add(Daytimer));
      app.put("/data/daytimers/:id", h.update(Daytimer));
      return app["delete"]("/data/daytimers/:id", h["delete"](Daytimer));
    };
  })(this);

  exports = module.exports = d;

}).call(this);
