(function ($, Drupal, drupalSettings) {

  window.brcvisDataProcessing = {}
  window.brcvisDataProcessing.fns = {}

  $(document).ready(function () {

    brcvisDataProcessing.processReportData = function (report, fn) {

      if (window.drupalSettings.brc_vis.data) {
        var repdataAll = JSON.parse(window.drupalSettings.brc_vis.data)
        var repdata = repdataAll[report]
        var fn = window.brcvisDataProcessing.fns[fn]
        var selector = '[data-report="' + report + '"]'
    
        if(fn && repdata) {
          fn(repdata, selector)
        }
      }
    }

    // Process elements with class 'brcvis'
    d3.selectAll('.brcvis').each(function(){
      var report = d3.select(this).attr('data-report')
      var fn = d3.select(this).attr('data-fn')
      console.log('tag with report & function ', report), fn
      brcvisDataProcessing.processReportData(report, fn)
    });

    // Process elements with class 'atlasdrupal'
    // d3.selectAll('.atlasdrupal').each(function(){
    //   var id = d3.select(this).attr('id')

    //   if (!id) {
    //     console.error("You must specify a unique id attribute for elements of class atlasdrupal.")
    //   } else {
    //     var atlasconfig = d3.select(this).attr('data-atlasconfig')
    //     var mapid="atlas-map-"+id
    //     var sel="#"+id
    //     atlasconfigs[atlasconfig](sel, mapid)
    //   }
    // })
  })
})(jQuery, Drupal, drupalSettings);