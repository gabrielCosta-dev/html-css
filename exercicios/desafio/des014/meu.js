function calcular() {
    let mat1 = document.getElementsByClassName('matematica')[0].value
    let mat2 = document.getElementsByClassName('matematica')[1].value
    
    let fis1 = document.getElementsByClassName('fisica')[0].value
    let fis2 = document.getElementsByClassName('fisica')[1].value
    
    let qui1= document.getElementsByClassName('quimica')[0].value
    let qui2= document.getElementsByClassName('quimica')[1].value
    
    let bio1 = document.getElementsByClassName('biologia')[0].value
    let bio2 = document.getElementsByClassName('biologia')[1].value
    
    let his1 = document.getElementsByClassName('historia')[0].value
    let his2 = document.getElementsByClassName('historia')[1].value
    
    let geo1= document.getElementsByClassName('geografia')[0].value
    let geo2 = document.getElementsByClassName('geografia')[1].value

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

        let fisN1 = Number(fis1)
        let fisN2 = Number(fis2)
        let mediaF = (fisN1 + fisN2)/2

        let quiN1 = Number(qui1)
        let quiN2 = Number(qui2)
        let mediaQ = (quiN1 + quiN2)/2

        let bioN1 = Number(bio1)
        let bioN2 = Number(bio2)
        let mediaB = (bioN1 + bioN2)/2

        let hisN1 = Number(his1)
        let hisN2 = Number(his2)
        let mediaH = (hisN1 + hisN2)/2

        let geoN1 = Number(geo1)
        let geoN2 = Number(geo2)
        let mediaG = (geoN1 + geoN2)/2

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
    
}