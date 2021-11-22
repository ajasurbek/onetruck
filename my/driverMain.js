var elFormDriver = document.querySelector('.driver__form-main')
var elInputFullname = elFormDriver.querySelector('.js_fio')
var elinputPasport = elFormDriver.querySelector('.js_pasport')
var elinputRegion = elFormDriver.querySelector('.js_viloyat')
var elInputCertificate = elFormDriver.querySelector('.js_guvohnoma')
var elInputLicense = elFormDriver.querySelector('.js_litsenziya')
var elInputAttorney = elFormDriver.querySelector('.js_ishonchnoma')
var elInputLizing = elFormDriver.querySelector('.js_lizing')
var elInputTexPasport = elFormDriver.querySelector('.js_tex-pasport')
var elInputTransNumber = elFormDriver.querySelector('.js_trans_raqam')
var elInputTransTel = elFormDriver.querySelector('.js_tel_raqam')
var elInputChooseTrans = elFormDriver.querySelector('.js_tans_tanlang')
var elBtnDriver = document.querySelector('.js_btn-driver')


// elFormDriver.addEventListener(('sutmit', function (evt) {
//     evt.preventDefault()
//     let elInputFullnameVal = elInputFullname.value.trim()
//     var elInputValPasport = elinputPasport.value.trim()
//     var elInputValRegion = elinputRegion.value.trim()
//     var elInputValCertificate = elInputCertificate.value.trim()
//     var elInputValLicense = elInputLicense.value.trim()
//     var elInputValAttorney = elInputAttorney.value.trim()
//     var elInputValLizing = elInputLizing.value.trim()
//     var elInputValTexPasport = elInputTexPasport.value.trim()
//     var elInputValTransNumber = elInputTransNumber.value.trim()
//     var elInputValTransTel = elInputTransTel.value.trim()
    
  


    
// console.log(
//     elInputFullnameVal
//     ,elInputValPasport
//     ,elInputValRegion
//     ,elInputValCertificate
//     ,elInputValLicense
//     ,elInputValAttorney
//     ,elInputValLizing
//     ,elInputValTexPasport
//     ,elInputValTransNumber
//     ,elInputValTransTel
// );
// }))
function getSelectValue()
{
    var elInputValChooseTrans = elInputChooseTrans.value
    console.log(elInputValChooseTrans);
}
getSelectValue();
