document.getElementById('base').addEventListener('click',function(e){
    if(window.innerWidth <= 768){
    document.getElementById("h22").innerHTML = "Cores da Base";
    document.getElementById('cores').style.visibility = "visible";
    document.getElementById('acabamentos').style.display = "none";
    document.getElementById('deletebaselabel').style.display = "block";
}
else{document.getElementById("h22").innerHTML = "Cores da Base";}
});

document.getElementById('gola1').addEventListener('click',function(e){
    if(window.innerWidth <= 768){
    document.getElementById("h22").innerHTML = "Cores da Gola";
    document.getElementById('cores').style.visibility = "visible";
    document.getElementById('acabamentos').style.display = "none";
    document.getElementById('deletebaselabel').style.display = "block";}
    else{
        document.getElementById("h22").innerHTML = "Cores da Gola";
    }
});
document.getElementById('punho').addEventListener('click',function(e){
    if(window.innerWidth <= 768){
        document.getElementById("h22").innerHTML = "Cores do Punho";
        document.getElementById('cores').style.visibility = "visible";
        document.getElementById('acabamentos').style.display = "none";
        document.getElementById('deletebaselabel').style.display = "block";}
        else{
            document.getElementById("h22").innerHTML = "Cores do Punho";
        }
});
document.getElementById('vista').addEventListener('click',function(e){
    if(window.innerWidth <= 768){
        document.getElementById("h22").innerHTML = "Cores da Manga";
        document.getElementById('cores').style.visibility = "visible";
        document.getElementById('acabamentos').style.display = "none";
        document.getElementById('deletebaselabel').style.display = "block";}
        else{
            document.getElementById("h22").innerHTML = "Cores da Manga";
        }
});

document.getElementById('cor1').addEventListener('click', function(e){
if(document.getElementById('base').checked){
    document.getElementById('corbase').style.fill = "#fff";
    document.getElementById('corbasecostas').style.fill = "#fff";
    document.getElementById('CB').style.backgroundColor = "#fff";
}if(document.getElementById('gola1').checked){
    document.getElementById('golaE').style.fill = "#fff";
    document.getElementById('ge').style.backgroundColor = "#fff";
    document.getElementById('golaI').style.fill = "#fff";
    document.getElementById('golaC').style.fill = "#fff";
}if(document.getElementById('punho').checked){
    document.getElementById('punho2').style.fill = "#fff";
    document.getElementById('punho1').style.fill = "#fff";
    document.getElementById('PU').style.backgroundColor = "#fff";
}if(document.getElementById('vista').checked){
    document.getElementById('manga').style.fill = "#fff";
    document.getElementById('manga1').style.fill = "#fff";
    document.getElementById('VE').style.backgroundColor = "#fff";
}
  });

  document.getElementById('cor2').addEventListener('click', function(e){
if(document.getElementById('base').checked){
    document.getElementById('corbase').style.fill = "#b1a5a2";
    document.getElementById('corbasecostas').style.fill = "#b1a5a2";
    document.getElementById('CB').style.backgroundColor = "#b1a5a2";
}if(document.getElementById('gola1').checked){
    document.getElementById('golaE').style.fill = "#b1a5a2";
    document.getElementById('ge').style.backgroundColor = "#b1a5a2";
    document.getElementById('golaI').style.fill = "#b1a5a2";
    document.getElementById('golaC').style.fill = "#b1a5a2";
}if(document.getElementById('punho').checked){
    document.getElementById('punho2').style.fill = "#b1a5a2";
    document.getElementById('punho1').style.fill = "#b1a5a2";
    document.getElementById('PU').style.backgroundColor = "#b1a5a2";
}if(document.getElementById('vista').checked){
    document.getElementById('manga').style.fill = "#b1a5a2";
    document.getElementById('manga1').style.fill = "#b1a5a2";
    document.getElementById('VE').style.backgroundColor = "#b1a5a2";
}
  });

document.getElementById('cor3').addEventListener('click', function(e){
if(document.getElementById('base').checked){
    document.getElementById('corbase').style.fill = "#d99e02";
    document.getElementById('corbasecostas').style.fill = "#d99e02";
    document.getElementById('CB').style.backgroundColor = "#d99e02";
}
if(document.getElementById('gola1').checked){
    document.getElementById('golaE').style.fill = "#d99e02";
    document.getElementById('ge').style.backgroundColor = "#d99e02";
    document.getElementById('golaI').style.fill = "#d99e02";
    document.getElementById('golaC').style.fill = "#d99e02";
}if(document.getElementById('punho').checked){
    document.getElementById('punho2').style.fill = "#d99e02";
    document.getElementById('punho1').style.fill = "#d99e02";
    document.getElementById('PU').style.backgroundColor = "#d99e02";
}if(document.getElementById('vista').checked){
    document.getElementById('manga').style.fill = "#d99e02";
    document.getElementById('manga1').style.fill = "#d99e02";
    document.getElementById('VE').style.backgroundColor = "#d99e02";
}
  });
  document.getElementById('cor4').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#bc0008";
        document.getElementById('corbasecostas').style.fill = "#bc0008";
        document.getElementById('CB').style.backgroundColor = "#bc0008";
    }
    if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#bc0008";
        document.getElementById('ge').style.backgroundColor = "#bc0008";
        document.getElementById('golaI').style.fill = "#bc0008";
        document.getElementById('golaC').style.fill = "#bc0008";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#bc0008";
        document.getElementById('punho1').style.fill = "#bc0008";
        document.getElementById('PU').style.backgroundColor = "#bc0008";
    }if(document.getElementById('vista').checked){
        document.getElementById('manga').style.fill = "#bc0008";
        document.getElementById('manga1').style.fill = "#bc0008";
        document.getElementById('VE').style.backgroundColor = "#bc0008";
    }
      });

    document.getElementById('cor5').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#8f919c";
        document.getElementById('corbasecostas').style.fill = "#8f919c";
        document.getElementById('CB').style.backgroundColor = "#8f919c";
    }
    if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#8f919c";
        document.getElementById('ge').style.backgroundColor = "#8f919c";
        document.getElementById('golaI').style.fill = "#8f919c";
        document.getElementById('golaC').style.fill = "#8f919c";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#8f919c";
        document.getElementById('punho1').style.fill = "#8f919c";
        document.getElementById('PU').style.backgroundColor = "#8f919c";
    }if(document.getElementById('vista').checked){
        document.getElementById('manga').style.fill = "#8f919c";
        document.getElementById('manga1').style.fill = "#8f919c";
        document.getElementById('VE').style.backgroundColor = "#8f919c";
    }
      });
      document.getElementById('cor6').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#4e5260";
        document.getElementById('corbasecostas').style.fill = "#4e5260";
        document.getElementById('CB').style.backgroundColor = "#4e5260";
    }
    if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#4e5260";
        document.getElementById('ge').style.backgroundColor = "#4e5260";
        document.getElementById('golaI').style.fill = "#4e5260";
        document.getElementById('golaC').style.fill = "#4e5260";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#4e5260";
        document.getElementById('punho1').style.fill = "#4e5260";
        document.getElementById('PU').style.backgroundColor = "#4e5260";
    }if(document.getElementById('vista').checked){
        document.getElementById('manga').style.fill = "#4e5260";
        document.getElementById('manga1').style.fill = "#4e5260";
        document.getElementById('VE').style.backgroundColor = "#4e5260";
    }
      });
      document.getElementById('cor7').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#00694c";
        document.getElementById('corbasecostas').style.fill = "#00694c";
        document.getElementById('CB').style.backgroundColor = "#00694c";
    }
    if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#00694c";
        document.getElementById('ge').style.backgroundColor = "#00694c";
        document.getElementById('golaI').style.fill = "#00694c";
        document.getElementById('golaC').style.fill = "#00694c";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#00694c";
        document.getElementById('punho1').style.fill = "#00694c";
        document.getElementById('PU').style.backgroundColor = "#00694c";
    }if(document.getElementById('vista').checked){
        document.getElementById('manga').style.fill = "#00694c";
        document.getElementById('manga1').style.fill = "#00694c";
        document.getElementById('VE').style.backgroundColor = "#00694c";
    }
      });
    document.getElementById('cor8').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#3a70ad";
        document.getElementById('corbasecostas').style.fill = "#3a70ad";
        document.getElementById('CB').style.backgroundColor = "#3a70ad";
    }
    if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#3a70ad";
        document.getElementById('ge').style.backgroundColor = "#3a70ad";
        document.getElementById('golaI').style.fill = "#3a70ad";
        document.getElementById('golaC').style.fill = "#3a70ad";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#3a70ad";
        document.getElementById('punho1').style.fill = "#3a70ad";
        document.getElementById('PU').style.backgroundColor = "#3a70ad";
    }if(document.getElementById('vista').checked){
        document.getElementById('manga').style.fill = "#3a70ad";
        document.getElementById('manga1').style.fill = "#3a70ad";
        document.getElementById('VE').style.backgroundColor = "#3a70ad";
    }
      });
    document.getElementById('cor9').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#00197d";
        document.getElementById('corbasecostas').style.fill = "#00197d";
        document.getElementById('CB').style.backgroundColor = "#00197d";
    }
    if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#00197d";
        document.getElementById('ge').style.backgroundColor = "#00197d";
        document.getElementById('golaI').style.fill = "#00197d";
        document.getElementById('golaC').style.fill = "#00197d";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#00197d";
        document.getElementById('punho1').style.fill = "#00197d";
        document.getElementById('PU').style.backgroundColor = "#00197d";
    }if(document.getElementById('vista').checked){
        document.getElementById('manga').style.fill = "#00197d";
        document.getElementById('manga1').style.fill = "#00197d";
        document.getElementById('VE').style.backgroundColor = "#00197d";
    }
      });
   document.getElementById('cor10').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#020311";
        document.getElementById('corbasecostas').style.fill = "#020311";
        document.getElementById('CB').style.backgroundColor = "#020311";
    }
    if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#020311";
        document.getElementById('ge').style.backgroundColor = "#020311";
        document.getElementById('golaI').style.fill = "#020311";
        document.getElementById('golaC').style.fill = "#020311";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#020311";
        document.getElementById('punho1').style.fill = "#020311";
        document.getElementById('PU').style.backgroundColor = "#020311";
    }if(document.getElementById('vista').checked){
        document.getElementById('manga').style.fill = "#020311";
        document.getElementById('manga1').style.fill = "#020311";
        document.getElementById('VE').style.backgroundColor = "#020311";
    }
      });
   document.getElementById('cor11').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#000";
        document.getElementById('corbasecostas').style.fill = "#000";
        document.getElementById('CB').style.backgroundColor = "#000";
    }
    if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#000";
        document.getElementById('ge').style.backgroundColor = "#000";
        document.getElementById('golaI').style.fill = "#000";
        document.getElementById('golaC').style.fill = "#000";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#000";
        document.getElementById('punho1').style.fill = "#000";
        document.getElementById('PU').style.backgroundColor = "#000";
    }if(document.getElementById('vista').checked){
        document.getElementById('manga').style.fill = "#000";
        document.getElementById('manga1').style.fill = "#000";
        document.getElementById('VE').style.backgroundColor = "#000";
    }
      });
  //bolso on/off
  const bolsoligadesliga = document.getElementById('switch-shadow');
  bolsoligadesliga.addEventListener('click', function(e){
    if(document.getElementById('switch-shadow').checked){
      document.querySelector(".frente6").style.visibility = "visible";
      document.querySelector(".frente7").style.visibility = "visible";
      document.querySelector(".frente5").style.visibility = "hidden";
      document.querySelector(".frente4").style.visibility = "hidden";
    }else{
      document.querySelector(".frente6").style.visibility = "hidden";
      document.querySelector(".frente7").style.visibility = "hidden";
      document.querySelector(".frente5").style.visibility = "visible";
      document.querySelector(".frente4").style.visibility = "visible";
    }
  });

  /*function confere(){
    {
      if(document.getElementById('switch-shadow').checked){
        document.getElementById('golaI').style.visibility = "visible";
        document.getElementById('golaE').style.visibility = "hidden";
        document.querySelector(".frente5").style.visibility = "visible";
        document.querySelector(".frente4").style.visibility = "hidden";
      }else {
        document.getElementById('golaI').style.visibility = "hidden";
        document.getElementById('golaE').style.visibility = "visible";
        document.querySelector(".frente4").style.visibility = "visible";
       document.querySelector(".frente5").style.visibility = "hidden";
      }
    };
  };
  confere();*/

  // download
$(document).ready(function(){
  $("#download").click(function(){
    domtoimage.toBlob(document.getElementById('social_masculino')).then(function(blob){
      window.saveAs(blob, "Malha.png");
      
    })
  })
 });

 //upload
 var deleteIcon = "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Ebene_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='595.275px' height='595.275px' viewBox='200 215 230 470' xml:space='preserve'%3E%3Ccircle style='fill:%23F44336;' cx='299.76' cy='439.067' r='218.516'/%3E%3Cg%3E%3Crect x='267.162' y='307.978' transform='matrix(0.7071 -0.7071 0.7071 0.7071 -222.6202 340.6915)' style='fill:white;' width='65.545' height='262.18'/%3E%3Crect x='266.988' y='308.153' transform='matrix(0.7071 0.7071 -0.7071 0.7071 398.3889 -83.3116)' style='fill:white;' width='65.544' height='262.179'/%3E%3C/g%3E%3C/svg%3E";

var imga = document.createElement('img');
imga.src = deleteIcon;

  var canvas = new fabric.Canvas('list');
  let uploader = document.getElementById("uploader");
  uploader.addEventListener('change',function(e){
var reader = new FileReader();
reader.onload = function(e) {
  var image = new Image();
  image.src = e.target.result;
  image.onload = function() {
    var img = new fabric.Image(image);
    img.set({
      left: 100,
      top: 60
    });
    img.scaleToWidth(200);
    canvas.add(img).setActiveObject(img).renderAll();
    }
}
reader.readAsDataURL(e.target.files[0]);
setTimeout(() => {
  document.getElementById("uploader").value = "";
}, 1)
});
fabric.Object.prototype.controls.deleteControl = new fabric.Control({
  x: 0.5,
  y: -0.5,
  offsetY: 16,
  cursorStyle: 'pointer',
  mouseUpHandler: deleteObject,
  render: renderIcon,
  cornerSize: 24
});


function deleteObject(eventData, transform) {
      var target = transform.target;
      var canvas = target.canvas;
          canvas.remove(target);
      canvas.requestRenderAll();
  };

function renderIcon(ctx, left, top, styleOverride, fabricObject) {
  var size = this.cornerSize;
  ctx.save();
  ctx.translate(left, top);
  ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
  ctx.drawImage(imga, -size/2, -size/2, size, size);
  ctx.restore();
};


///////////Responsivo
///////Celular
const lado = document.getElementById('switch-shadow2');
  lado.addEventListener('click', function(e){
    if(document.getElementById('switch-shadow2').checked){
        document.querySelector(".frente").style.display = "none";
        document.querySelector(".costas").style.visibility = "visible";
      }else{
        document.querySelector(".frente").style.display = "block";
        document.querySelector(".costas").style.visibility = "hidden";
      }});


function sizeOfThings() {
    if (window.innerWidth > 768){
        document.getElementById('costas').style.visibility = "visible";
        document.getElementById('frente').style.visibility = "visible";
        document.getElementById('acabamentos').style.display = "block";
        document.getElementById('cores').style.visibility = "visible";
    }else{
        document.getElementById('costas').style.visibility = "hidden";
        document.getElementById('acabamentos').style.display = "none";
        document.getElementById('cores').style.visibility = "hidden";


    }
 };
window.addEventListener('resize', function(){
	sizeOfThings();
});


document.getElementById('btnacabalabel').addEventListener('click', function(e){
  document.getElementById('acabamentos').style.display = "block";
  document.getElementById('deletelabel').style.display = "block";
  document.getElementById('cores').style.visibility = "hidden";
})

document.getElementById('deleteb').addEventListener('click', function(e){
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('deletebase').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('botaocor').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "visible";
  document.getElementById('deletebaselabel').style.display = "block";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

