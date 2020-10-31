





Quagga.init({
    inputStream : {
      
      

		name: "Live",
  type: "LiveStream",
		target: document.querySelector('#quagga'),
  constraints: {
    width: 640,
    height: 480,
    facingMode: "environment",
    deviceId: "7832475934759384534"
  },
  area: { // defines rectangle of the detection/localization area
    top: "0%",    // top offset
    right: "0%",  // right offset
    left: "0%",   // left offset
    bottom: "0%"  // bottom offset
  },
  singleChannel: true //
		
		
		
		
		
    },
    decoder : {
      readers : ["code_128_reader", "ean_reader"],
		debug: {
      drawBoundingBox: false,
      showFrequency: false,
      drawScanline: false,
      showPattern: false
  }
  multiple: false
    }
  }, function(err) {
      if (err) {
          console.log(err);
          return
      }
      console.log("Initialization finished. Ready to start");
      Quagga.start();
  });




Quagga.onDetected(function(result) {
            var code = result.codeResult.code;
            if (this.last_result !== code) {
                console.log("Quagga result:")
                console.log(result)
                this.last_result = code;
                var canvas = Quagga.canvas.dom.image;
                var node = $('<li><div class="thumbnail"><div class="imgWrapper"><img /></div><div class="caption"><h4 class="code"></h4></div></div></li>');
                node.find("img").attr("src", canvas.toDataURL());
                node.find("h4.code").html(code+"    "+ device.kind );
                $("#result_strip ul.thumbnails").prepend(node);
            }
        });





init: function(){
        this.quagga_init(true, 640, 480)
        
        Quagga.onProcessed(function(result) {
            var drawingCtx = Quagga.canvas.ctx.overlay,
                drawingCanvas = Quagga.canvas.dom.overlay;

            if (result) {
                if (result.boxes) {
                    drawingCtx.clearRect(0, 0, parseInt(drawingCanvas.getAttribute("width")), parseInt(drawingCanvas.getAttribute("height")));
                    result.boxes.filter(function (box) {
                        return box !== result.box;
                    }).forEach(function (box) {
                        Quagga.ImageDebug.drawPath(box, {x: 0, y: 1}, drawingCtx, {color: "green", lineWidth: 2});
                    });
                }

                if (result.box) {
                    Quagga.ImageDebug.drawPath(result.box, {x: 0, y: 1}, drawingCtx, {color: "#00F", lineWidth: 2});
                }

                if (result.codeResult && result.codeResult.code) {
                    Quagga.ImageDebug.drawPath(result.line, {x: 'x', y: 'y'}, drawingCtx, {color: 'red', lineWidth: 3});
                }
            }
        });
	
	
	
	
	
	
	Quagga.onDetected(function(result) {
            var code = result.codeResult.code;
            if (this.last_result !== code) {
                console.log("Quagga result:")
                console.log(result)
                this.last_result = code;
                var canvas = Quagga.canvas.dom.image;
                var node = $('<li><div class="thumbnail"><div class="imgWrapper"><img /></div><div class="caption"><h4 class="code"></h4></div></div></li>');
                node.find("img").attr("src", canvas.toDataURL());
                node.find("h4.code").html(code+"    "+ device.kind );
                $("#result_strip ul.thumbnails").prepend(node);
            }
        });
	
	
	
	Quagga.onDetected(function(result) {
            var code = result.codeResult.code;
            if (this.last_result !== code) {
                console.log("Quagga result:")
                console.log(result)
                this.last_result = code;
                var canvas = Quagga.canvas.dom.image;
                var node = $('<li><div class="thumbnail"><div class="imgWrapper"><img /></div><div class="caption"><h4 class="code"></h4></div></div></li>');
                node.find("img").attr("src", canvas.toDataURL());
                node.find("h4.code").html(code+"    "+ device.kind );
                $("#result_strip ul.thumbnails").prepend(node);
            }
        });
	
	
	
	
	
	