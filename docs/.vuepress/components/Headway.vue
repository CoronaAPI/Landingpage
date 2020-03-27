<script>
// @see https://docs.headwayapp.co/widget for more configuration options.
var HW_config = {
  selector: ".links", // CSS selector where to inject the badge
  account: "J5ggqx",
  callbacks: {
    onWidgetReady: function(widget) {
      console.log("Widget is here!");
      console.log("unseen entries count: " + widget.getUnseenCount());
    },
    onShowWidget: function() {
      console.log("Someone opened the widget!");
    },
    onShowDetails: function(changelog) {
      console.log(changelog.position); // position in the widget
      console.log(changelog.id); // unique id
      console.log(changelog.title); // title
      console.log(changelog.category); // category, lowercased
    },
    onReadMore: function(changelog) {
      console.log(changelog); // same changelog object as in onShowDetails callback
    },
    onHideWidget: function() {
      console.log("Who turned off the light?");
    }
  }
};
Headway.init(HW_config);
</script>
