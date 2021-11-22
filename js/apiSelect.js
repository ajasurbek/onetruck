var BASE_URL = "http://labbay-delivery.uz/logistika/web/"
var IMG_URL = "http://www.labbay-delivery.uz/logistika/admin/"

async function getTariff() {
    let res = await fetch(BASE_URL + 'get_transport.php', {method: "POST"})
    let tariffs = await res.json()
    tariffs.Response.Items.forEach((tariff, i) => {
        document.querySelector('.js_tans_tanlang').innerHTML +=
            `
                <option class="dew" value=${JSON.stringify(tariff.Name)} >
                   
                     ${JSON.stringify(tariff.Name)}
                   
                </option>
            `
    })
}

getTariff();