function calcular() {
    let mat1 = document.getElementsByClassName('matematica')[0].value
    let mat2 = document.getElementsByClassName('matematica')[1].value
    let matMedia = document.getElementById('media-mat')
    
    let fis1 = document.getElementsByClassName('fisica')[0].value
    let fis2 = document.getElementsByClassName('fisica')[1].value
    let fisMedia = document.getElementById('media-fis')
    
    let qui1= document.getElementsByClassName('quimica')[0].value
    let qui2= document.getElementsByClassName('quimica')[1].value
    let quiMedia = document.getElementById('media-qui')
    
    let bio1 = document.getElementsByClassName('biologia')[0].value
    let bio2 = document.getElementsByClassName('biologia')[1].value
    let bioMedia = document.getElementById('media-bio')
    
    let his1 = document.getElementsByClassName('historia')[0].value
    let his2 = document.getElementsByClassName('historia')[1].value
    let hisMedia = document.getElementById('media-his')
    
    let geo1= document.getElementsByClassName('geografia')[0].value
    let geo2 = document.getElementsByClassName('geografia')[1].value
    let geoMedia = document.getElementById('media-geo')

    let mediaExa = document.getElementById('media-exatas')
    let mediaHum = document.getElementById('media-humanas')

    if (mat1!=='' && mat2!=='' ||
        fis1!=='' && fis2!=='' ||
        qui1!=='' && qui2!=='' ||
        bio1!=='' && bio2!=='' ||
        his1!=='' && his2!=='' ||
        geo1!=='' && geo2!='') {
        
        let matN1 = Number(mat1)
        let matN2 = Number(mat2)
        let mediaM = (matN1 + matN2)/2
        matMedia.innerHTML = mediaM

        let fisN1 = Number(fis1)
        let fisN2 = Number(fis2)
        let mediaF = (fisN1 + fisN2)/2
        fisMedia.innerHTML = mediaF

        let quiN1 = Number(qui1)
        let quiN2 = Number(qui2)
        let mediaQ = (quiN1 + quiN2)/2
        quiMedia.innerHTML = mediaQ

        let bioN1 = Number(bio1)
        let bioN2 = Number(bio2)
        let mediaB = (bioN1 + bioN2)/2
        bioMedia.innerHTML = mediaB

        let hisN1 = Number(his1)
        let hisN2 = Number(his2)
        let mediaH = (hisN1 + hisN2)/2
        hisMedia.innerHTML = mediaH

        let geoN1 = Number(geo1)
        let geoN2 = Number(geo2)
        let mediaG = (geoN1 + geoN2)/2
        geoMedia.innerHTML = mediaG

        //Média de Exatas
        let mediaExt = (mediaM + mediaF + mediaQ + mediaB)/4
        mediaExa.innerHTML = `${mediaExt}`

        //Média de Humanas
        let mediaHms = (mediaG + mediaH)/2
        mediaHum.innerHTML = `${mediaHms}`

    } else {
        alert('Erro 404')
    }
}


function limpar() {
  document.getElementsByClassName('matematica')[0].value = ''
  document.getElementsByClassName('matematica')[1].value = ''
  document.getElementById('media-mat').innerHTML = 0

  document.getElementsByClassName('fisica')[0].value = ''
  document.getElementsByClassName('fisica')[1].value = ''
  document.getElementById('media-fis').innerHTML = 0
    
  document.getElementsByClassName('quimica')[0].value = ''
  document.getElementsByClassName('quimica')[1].value = ''
  document.getElementById('media-qui').innerHTML = 0
  
  document.getElementsByClassName('biologia')[0].value = ''
  document.getElementsByClassName('biologia')[1].value = ''
  document.getElementById('media-bio').innerHTML = 0
  
  document.getElementsByClassName('historia')[0].value = ''
  document.getElementsByClassName('historia')[1].value = ''
  document.getElementById('media-his').innerHTML = 0
  
  document.getElementsByClassName('geografia')[0].value = ''
  document.getElementsByClassName('geografia')[1].value = ''
  document.getElementById('media-geo').innerHTML = 0

  document.getElementById('media-exatas').innerHTML = ''
  document.getElementById('media-humanas').innerHTML = ''
}

function calcular1() {
    const areas = ['matematica', 'fisica', 'quimica', 'biologia', 'historia', 'geografia'];
    let preenchido = false;
  
    for (let i = 0; i < areas.length; i++) {
      const input1 = document.getElementsByClassName(areas[i])[0].value;
      const input2 = document.getElementsByClassName(areas[i])[1].value;
  
      if (input1 !== '' && input2 !== '') {
        preenchido = true;
        break;
      }
    }
  
    if (preenchido) {
      alert('Tudo OK');
    } else {
      alert('Erro 404');
    }
  }
  