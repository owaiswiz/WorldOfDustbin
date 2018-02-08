/**

 * SplineArea
 * StackedColumn
 * bubbleChart
 * mapChart
 * navigationActive
 * memberActive
 * lineChart
 * radarChart
 * dropdownMenu
 * tabNav
 * tabMessager
 * toggleInbox
 * scrollbarMember
 * scrollbarMessage
 * scrollbarMessageBox
 * scrollbarTable
 * counter
 * progressBar
 * detectViewport
 * setWidth
 * sendMessage
 * waveButton
 * retinaLogos
 * removePreload

*/
(function($) {

  'use strict';

  var SplineArea = function () {
    CanvasJS.addColorSet("greenShades",
      [//colorSet Array
        "#6256a9",
        "#00c7e3",
        "#7065b6",
        "#e02c73",            
      ]);

    var chart = new CanvasJS.Chart("chartStatistics",
      {
        backgroundColor: "transparent",
        colorSet:  "greenShades",
        responsive: false,
        animationEnabled: true,
        axisX:{
          gridColor: "#24262a",
          gridThickness: 1 ,
          tickColor: "transparent",
          LabelFontColor: "#898989",
          labelFontSize: "12",
          labelFontFamily: "Montserrat",
          maximum: 75,
          minimum: 5,
          lineThickness: 1,
          lineColor: "#24262a",
          tickLength: 15,
          tickColor: "transparent",
        },
        axisY:{
          gridColor: "#24262a" ,
          gridThickness: 1,
          tickColor: "transparent",
          labelFontFamily: "Montserrat",
          LabelFontColor: "#898989",
          labelFontSize: "12",
          maximum: 2000,
          minimum:0,
          interval: 500,
          valueFormatString: "####",
          lineThickness: 1,
          lineColor: "#24262a",
          tickLength: 15,
          tickColor: "transparent",
        },
        data: [{        
          type: "column",
          dataPoints: [
                  {label: "JAN", x: 10, y: 0},
                  {label: "FEB", x: 20, y: 0},
                  {label: "MAR", x: 30, y: 2000},
                  {label: "APR", x: 40, y: 0},
                  {label: "MAY", x: 50, y: 0},
                  {label: "JUN", x: 60, y: 0},
                  {label: "JUL", x: 70, y: 0},
          ]},
        {        
          type: "splineArea",
          markerColor: "transparent",
          fillOpacity: 0.9,
          bevelEnabled: true,
          lineColor:"#04aec6",
          dataPoints: [
                     {label: "",x: 0, y: 750},
                     {label: "JAN",x: 10, y: 700},
                     {label: "FEB",x: 20, y: 1400},
                     {label: "MAR",x: 30, y: 700},
                     {label: "APR",x: 40, y: 850},
                     {label: "MAY",x: 50, y: 1350},
                     {label: "JUN",x: 60, y: 1000},
                     {label: "JUL",x: 70, y: 900},
                     {label: "JUL",x: 80, y: 1100},
          ]},
        {        
          type: "splineArea",
          markerColor: "transparent",
          fillOpacity: 0.9,
          lineColor:"#6c61b1",
          bevelEnabled: true,
          dataPoints: [
                     {label: "",x: 0, y: 1000},
                     {label: "JAN",x: 10, y: 1122},
                     {label: "FEB",x: 20, y: 800},
                     {label: "MAR",x: 30, y: 1397},
                     {label: "APR",x: 40, y: 600},
                     {label: "MAY",x: 50, y: 700},
                     {label: "JUN",x: 60, y: 600},
                     {label: "JUL",x: 70, y: 1010},
                     {label: "JUL",x: 80, y: 1000},
          ]},
        {        
          type: "splineArea",
          markerColor: "transparent",
          fillOpacity: 0.9,
          bevelEnabled: true,
          lineColor:"#f72771",
          dataPoints: [
                     {label: "",x: 0, y: 400},
                     {label: "JAN",x: 10, y: 550},
                     {label: "FEB",x: 20, y: 340},
                     {label: "MAR",x: 30, y: 450},
                     {label: "APR",x: 40, y: 250},
                     {label: "MAY",x: 50, y: 900},
                     {label: "JUN",x: 60, y: 550},
                     {label: "JUL",x: 70, y: 700},
                     {label: "",x: 80, y: 600}, 
          ]}
        ]
      });
    chart.render();
  }; // Spline Area

  var StackedColumn = function () {
    CanvasJS.addColorSet("greenShades",
      [//colorSet Array
        "#4c418b",
        "#00bcd5"           
      ]);
    var chart = new CanvasJS.Chart("chart-stackedColumn",
      {
        backgroundColor: "transparent",
        colorSet:  "greenShades",
        animationEnabled: true,
        dataPointMaxWidth: 55,
        resize: true,
        toolTip:{
          shared: true,
        },
        axisX:{
          gridThickness: 0 ,
          tickColor: "transparent",
          LabelFontColor: "#898989",
          labelFontSize: "12",
          labelFontFamily: "Montserrat",
          lineThickness: 0
        },
        axisY:{
          gridThickness: 0,
          tickColor: "transparent",
          LabelFontColor: "#898989",
          labelFontFamily: "Montserrat",
          labelFontSize: "12",
          maximum: 2000,
          interval: 500,
          valueFormatString: "####",
          lineThickness: 0
        },
        data: [{
          type: "stackedColumn",
          name: "UI",
          dataPoints: [
                  {  y: 800 , label: "Sun"},
                  {  y: 1250, label: "Mon" },
                  {  y: 600, label: "Tue" },
                  {  y: 800, label: "Wed" },
                  {  y: 200, label: "Thu"},
                  {  y: 1150, label: "Fri"},
                  {  y: 650, label: "Sat"}
          ]}, 
        {
          type: "stackedColumn",
          name: "UX",
          dataPoints: [
                     {  y: 100 , label: "Sun"},
                     {  y: 400, label: "Mon" },
                     {  y: 1300, label: "Tue" },
                     {  y: 450, label: "Wed" },
                     {  y: 250, label: "Thu"},
                     {  y: 300, label: "Fri"},
                     {  y: 300, label: "Sat"}
          ]}
        ]
      });
    chart.render();
  }; // Stacked Column

 var dropdownMenu = function() {
    var pull = $(".box .pull-right i"),
      user = $(".navbar-top ul.info-right li.user");
    pull.on('click',function() {
      $(this).parent(".pull-right").toggleClass('open');
      $(this).parent(".pull-right").find('.dropdown-menu').toggleClass('active');
    });
    user.on('click',function() {
      $(this).toggleClass('open');
      $(this).find('.dropdown-menu').toggleClass('active');
    });
  }; // Dropdown Menu

  var navigationActive = function() {
    var button = $(".top-button");
    button.on('click',function() {
      $(this).closest('body').children(".vertical-navigation").toggleClass('active').delay(800);
      $(this).closest('body').children('main').toggleClass('active');
      $(this).parent('.curren-menu').children('.logo').toggleClass('active');
      button.toggleClass('active');
      $(this).closest('body').children(".vertical-navigation").toggleClass('show');
    });
    var buttonNav = $('.vertical-navigation.left ul.sidebar-nav > li');
    buttonNav.on('click', function(event) {
      $(this).closest('body').children(".vertical-navigation").removeClass('active');
      $(this).closest('body').children('main').removeClass('active');
      $(this).closest('body').find('.curren-menu').children('.logo').removeClass('active');
      event.preventDefault();
    });
  }; // Navigation Active

  var memberActive = function() {
    var button = $(".button-menu-right");
    button.on('click',function() {
      $(this).closest('body').children(".member-status").toggleClass('closed');
      $(this).closest('body').children("main").toggleClass('open');
      button.toggleClass('active');
    });
  }; // Member Active

  var tabNav = function() {
    var speed = 1000;
    $('.vertical-navigation').each(function() {
      $(this).find('.sidebar-nav').children().first().addClass('active'),
            $(this).closest('body').find('main').children('section').first().show(),
            $(this).find('.sidebar-nav').children('li').on('click', function(e){
              var liActive = $(this).index();
              $(this).addClass('active').siblings().removeClass('active');
              $(this).addClass('active').closest('body').find('main').children('section').eq(liActive).fadeIn(1000).show().siblings().hide();
              e.preventDefault();
            });
    });
  }; // Tab Nav

  var tabMessager = function() {
    var speed = 1000;
    $('.member-status').each(function() {
      $(this).find('.member-tab').children().first().addClass('active'),
            $(this).children('.sidebar-member').find('.scroll').first().show().siblings().hide(),
            $(this).find('.member-tab').children('li').on('click', function(e){

              var liActive = $(this).index(),
                contentActive = $(this).siblings().removeClass('active').parents('.sidebar-member').children('.content-tab').children().eq(liActive);

              $(this).addClass('active').closest('.sidebar-member').find('.content-tab').children().eq(liActive).fadeIn(1000).show().siblings().hide();
              e.preventDefault();
            });
    });
  }; // Tab Message

  var toggleInbox = function() {
    $( ".box-message .box-header" ).on('click', function() {
      $(this).toggleClass('active');
      $( ".box-message .box-content" ).slideToggle(300);
    });
  }; // Toggle Inbox

  var sendMessage = function() {
    $('textarea[name="message"]').each(function() {
      var text = $('textarea[name="message"]');
      $('.btn-send button').on('click', function(e) {
        if (text.val() == '') {
          alert('Please type in the box to chat!');
        } else {
          $('<div class="clearfix"></div><div class="message-in"><div class="message-pic"><img src="images/avatar/message-06.png" alt=""><div class="status-color purple"></div></div><div class="message-body"><div class="message-text"><p>' + text.val() + '</p></div></div></div>').appendTo('div.message-box .mCustomScrollBox .mCSB_container');
          text.val('');
          var heights = $('div.message-box .mCustomScrollBox .mCSB_container').height(),
            agv = heights - 644;
          $('div.message-box .mCustomScrollBox .mCSB_container').css({
            top: -(agv),
          });                    }
        e.preventDefault();
      });
      $(this).keyup(function(event){
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){
          if (text.val() == '') {
            alert('Please type in the box to chat!');
          } else {
            $('<div class="clearfix"></div><div class="message-in"><div class="message-pic"><img src="images/avatar/message-06.png" alt=""><div class="status-color purple"></div></div><div class="message-body"><div class="message-text"><p>' + text.val() + '</p></div></div></div>').appendTo('div.message-box .mCustomScrollBox .mCSB_container');
            text.val('');
            var heights = $('div.message-box .mCustomScrollBox .mCSB_container').height(),
              agv = heights - 644;
            $('div.message-box .mCustomScrollBox .mCSB_container').css({
              top: -(agv),
            });
          }
        }
        event.preventDefault();
      });
    });
  }; // Send Message

  var scrollbarMember = function() {
    if ( $().mCustomScrollbar ) {
      $(".member-status .sidebar-member .scroll").mCustomScrollbar({
        scrollInertia:400,
      });
    }
  }; // Scrollbar Member

  var scrollbarMessage = function() {
    if ( $().mCustomScrollbar ) {
      $(".box-message .box-content .scroll").mCustomScrollbar({
        scrollInertia:400,
      });
    }
  }; // Scrollbar Message

  var scrollbarMessageBox = function() {
    if ( $().mCustomScrollbar ) {
      $("#message .message-info .scroll").mCustomScrollbar({
        scrollInertia:400,
      });
    }
  }; // Scrollbar MessageBox

  var scrollbarTable = function() {
    $(".box-project .box-content").mCustomScrollbar({
      axis:"x",
      advanced:{autoExpandHorizontalScroll:true},
      scrollInertia:400,
    });
  }; // Scrollbar MessageBox

  var counter = function() {
    $('.status-bar').on('on-appear', function() {             
      $(this).find('.numb').each(function() { 
        var to = parseInt( ($(this).attr('data-to')),10 ), speed = parseInt( ($(this).attr('data-speed')),10 );
        if ( $().countTo ) {
          $(this).countTo({
            to: to,
            speed: speed
          });
        }
      });
    });
  }; // Counter

  var progressBar = function(){
    $('td.bg').waypoint(function() {
      $('span').each( function() {
        var percent = $(this).data('percent');
        $(this).animate({
          "width": percent + '%'
        },1500); 
      });
    }, {offset: '100%'});
  };// Progress Bar

  var detectViewport = function() {
    $('[data-waypoint-active="yes"]').waypoint(function() {
      $(this).trigger('on-appear');
    }, { offset: '90%', triggerOnce: true });
    $(window).on('load', function() {
      setTimeout(function() {
        $.waypoints('refresh');
      }, 100);
    });
  }; // Detect Viewport

  var setWidth = function() {
    $('.box.right').on('resize', function() {
      var w1 = $('.box.right').children('.box-content').width();
      $(this).find('canvas').css({
        width: w1,
      });
    });
    $(window).on("resize", function () {
         // Set .right's width to the window width minus 480 pixels
      $("canvas").width( $(this).parent().width() );
         // Invoke the resize event immediately
    }).resize();
  };

  var waveButton = function () {
    Waves.attach('.button', ['waves-button', 'waves-float']);
    Waves.init();
  };

  var retinaLogos = function() {
    var retina = window.devicePixelRatio > 1 ? true : false;
    if(retina) {
      $('.header .logo').find('img').attr( {src:'./images/logo@2x.png',width:'94',height:'47'} );   
    }
  };         

  var removePreload = function() { 
    $(window).load(function() { 
      setTimeout(function() {
        $('.loader').hide(); }, 300           
         ); 
    });
  }; //remove Preloader

  $(function() {
    SplineArea();
    StackedColumn();
    navigationActive();
    memberActive();
    dropdownMenu();
    tabNav();
    tabMessager();
    toggleInbox();
    scrollbarMember();
    scrollbarMessage();
    scrollbarMessageBox();
    scrollbarTable();
    counter();
    progressBar();
    detectViewport();
    setWidth();
    sendMessage();
    waveButton();
    retinaLogos();
    removePreload();
  });

})(jQuery);
