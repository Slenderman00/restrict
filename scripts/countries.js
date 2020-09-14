let countries = [];

let fetch = (one, two) => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            data = xhttp.responseText;
            data = data.split('\n');
            countries = data;

            i = 0;
            data.forEach(country => {
                _country = document.createElement("option")
                _country.innerHTML = country;
                _country.value = i;

                _country2 = document.createElement("option")
                _country2.innerHTML = country;
                _country2.value = i;
                
                
                one.appendChild(_country);
                two.appendChild(_country2);

                i++;
            });
        }
    };
    xhttp.open("GET", "assets/countries.txt", true);
    xhttp.send();
}


let send = (departure, arrival, _result, _resultbody) => {
    if(departure != "" && arrival != "") {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                data = xhttp.responseText;
                _result.style.display = "block";
                _resultbody.innerHTML = state(data);
            }
        };
        xhttp.open("GET", "api.php?arrival=" + arrival + "&departure=" + departure, true);
        xhttp.send();
    }
}

let state = (data) => {
    data = JSON.parse(data);

    i_one = 'COUNTRY does not accept people from OTHERCOUNTRY except citizens and permanent residents of COUNTRY for whom a period of self-isolation of 10 to 21 days will be imposed.'

    z_one = 'Information regarding travelling from OTHERCOUNTRY to COUNTRY is uncertain. We recommend not making this trip before more information about this journey is published. Returning to OTHERCOUNTRY is without restriction.'
    z_two = 'Information regarding travelling from OTHERCOUNTRY to COUNTRY is uncertain. We recommend not making this trip before more information about this journey is published. In addition to this, a period of self-isolation is required when returning to OTHERCOUNTRY. Because of this, this travel is not recommended if not deemed necessary.'
    z_three = 'Information regarding travelling from OTHERCOUNTRY to COUNTRY is uncertain. We recommend not making this trip before more information about this journey is published.  In addition to this, OTHERCOUNTRY does not accept non-citizens coming from COUNTRY with citizens being obligated to a period of self-isolation; we do not recommend making this travel if not completely necessary.'
    z_four = 'Information regarding travelling from OTHERCOUNTRY to COUNTRY and back is uncertain. We recommend not making this trip before more information about this journey is published.'

    _one = 'COUNTRY accepts people from OTHERCOUNTRY, but you are required to self-isolate for 10 to 21 days upon arrival. Returning to OTHERCOUNTRY is without restriction.'
    _two = 'COUNTRY accepts people from OTHERCOUNTRY, but you are required to self-isolate for 10 to 21 days upon arrival. In addition to this, another period of self-isolation is required when returning to OTHERCOUNTRY. Because of this, this travel is not recommended if not necessary.'
    _three = 'COUNTRY accepts people from OTHERCOUNTRY, but you are required to self-isolate for 10 to 21 days upon arrival. However, as OTHERCOUNTRY does not accept people coming from COUNTRY for non-citizens with citizens being obligated to another period of self-isolation; we do not recommend making this travel if not completely necessary.' 
    _four = 'COUNTRY accepts people from OTHERCOUNTRY, but you are required to self-isolate for 10 to 21 days upon arrival. Information about returning to OTHERCOUNTRY from COUNTRY is unclear, and we  recommend not making this trip before more information is available.'

    y_one = 'COUNTRY has no restrictions concerning people travelling from OTHERCOUNTRY and you can freely return to OTHERCOUNTRY after your visit.'
    y_two = 'COUNTRY has no restrictions concerning people travelling from OTHERCOUNTRY, however at your return to COUNTRY you will be required to self-isolate for 10 to 21 days.'
    y_three = 'COUNTRY has no restrictions concerning people travelling from OTHERCOUNTRY. However, as OTHERCOUNTRY does not accept non-citizens coming from COUNTRY with citizens being obligated to a period of self-isolation; we do not recommend making this travel if not completely necessary.'
    y_four = 'COUNTRY has no restrictions concerning people travelling from OTHERCOUNTRY. Information regarding returning to OTHERCOUNTRY from COUNTRY is, however, unclear, and we recommend not making this trip before more information is available.'

    equal = 'Unfortunately, we do not possess data regarding domestic travel and would recommend that you visit the web pages of the Ministry of Health of COUNTRY.'

    if(data['countries'][0] == data['countries'][1]) {
        return equal.replace(/OTHERCOUNTRY/g, countries[data['countries'][0]]).replace(/COUNTRY/g, countries[data['countries'][1]]);
    }

    console.log(data['respons'][0])
    if(data['respons'][0] == 0) {
        //i
        return i_one.replace(/OTHERCOUNTRY/g, countries[data['countries'][0]]).replace(/COUNTRY/g, countries[data['countries'][1]]);

    }
    if(data['respons'][0] == 1) {
        //z
        if(data['respons'][1] == 3) {
            return z_one.replace(/OTHERCOUNTRY/g, countries[data['countries'][0]]).replace(/COUNTRY/g, countries[data['countries'][1]]);
        }
        if(data['respons'][1] == 2) {
            return z_two.replace(/OTHERCOUNTRY/g, countries[data['countries'][0]]).replace(/COUNTRY/g, countries[data['countries'][1]]);
        }
        if(data['respons'][1] == 0) {
            return z_three.replace(/OTHERCOUNTRY/g, countries[data['countries'][0]]).replace(/COUNTRY/g, countries[data['countries'][1]]);
        }
        if(data['respons'][1] == 1) {
            return z_four.replace(/OTHERCOUNTRY/g, countries[data['countries'][0]]).replace(/COUNTRY/g, countries[data['countries'][1]]);
        }

        
    }
    if(data['respons'][0] == 2) {
        //
        if(data['respons'][1] == 3) {
            return _one.replace(/OTHERCOUNTRY/g, countries[data['countries'][0]]).replace(/COUNTRY/g, countries[data['countries'][1]]);
        }
        if(data['respons'][1] == 2) {
            return _two.replace(/OTHERCOUNTRY/g, countries[data['countries'][0]]).replace(/COUNTRY/g, countries[data['countries'][1]]);
        }
        if(data['respons'][1] == 0) {
            return _three.replace(/OTHERCOUNTRY/g, countries[data['countries'][0]]).replace(/COUNTRY/g, countries[data['countries'][1]]);
        }
        if(data['respons'][1] == 1) {
            return _four.replace(/OTHERCOUNTRY/g, countries[data['countries'][0]]).replace(/COUNTRY/g, countries[data['countries'][1]]);
        }
        
    }
    if(data['respons'][0] == 3) {
        //y
        if(data['respons'][1] == 3) {
            return y_one.replace(/OTHERCOUNTRY/g, countries[data['countries'][0]]).replace(/COUNTRY/g, countries[data['countries'][1]]);
        }
        if(data['respons'][1] == 2) {
            return y_two.replace(/OTHERCOUNTRY/g, countries[data['countries'][0]]).replace(/COUNTRY/g, countries[data['countries'][1]]);
        }
        if(data['respons'][1] == 0) {
            return y_three.replace(/OTHERCOUNTRY/g, countries[data['countries'][0]]).replace(/COUNTRY/g, countries[data['countries'][1]]);
        }
        if(data['respons'][1] == 1) {
            return y_four.replace(/OTHERCOUNTRY/g, countries[data['countries'][0]]).replace(/COUNTRY/g, countries[data['countries'][1]]);
        }
        
    }

}