# router/main
# ---------------------------------------
tag = "router/main:%s =>"

# Requires
# ---------------------------------------


# Logic
# ---------------------------------------

main = Backbone.Router.extend({
	routes:
		"trackers": 	"trackers"
		"dashboard": 	"dashboard"
		"stats": 		"stats"
		"settings": 	"settings"
	initialize: ->
		# console.log(tag, "Router", "init!")
		if !Backbone.History.started
			Backbone.history.start({
				pushState: true
				})
		return this
	bindAnchors: ->
		targets = $("a[href^='/']")
		# console.log(tag, "bindAnchors:targets", targets)
		targets.click((e)=>
			e.preventDefault()
			# console.log(tag, "event", e)
			target = e.currentTarget.pathname.replace("/", "")
			# console.log(tag, "anchor:click", target)
			this.navigate(target, {trigger: true})
			)
	trackers: ->
		# console.log(tag, "trackers", "init!")
		React.render(
			<app.v.Trackers.Main />
			$(".content")[0]
			)
	dashboard: ->
		console.log(tag,"dashboard", "init")
		React.render(
			<app.v.Dashboard.Main />
			$(".content")[0]
			)
	stats: ->
		console.log(tag, "stats", "init")
		React.render(
			<app.v.Stats.Main />
			$(".content")[0]
			)
	settings: ->
		console.log(tag, "settings", "init")
		React.render(
			<app.v.Settings.Main />
			$(".content")[0]
			)
	})	


exports = module.exports = main