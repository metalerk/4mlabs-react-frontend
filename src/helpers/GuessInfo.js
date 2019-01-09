const GuessInfo = () => {
    let providers = ['ip-api', 'ipstack']
    let info = {
        timestamp: new Date(),
        timezone: (new Date()).getTimezoneOffset()/60,
        referrer: document.referrer,
        platform: navigator.platform,
        browser: {
            name: navigator.browserName,
            engine: navigator.product,
            version1a: navigator.appVersion,
            userAgent: navigator.userAgent,
            language: navigator.language,
        },
        location: {
            provider: providers[1],
            data: []
        }
    }
    if (!window.sessionStorage.getItem('tracking')) {
        fetch('https://react-4mlabs-backend-tracker.herokuapp.com/visitorinfo',
        {
            method: 'POST',
            body: JSON.stringify(info),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then((res) => res.json())
        .then((data) => {
            if (data.success){
                window.sessionStorage.setItem('tracking', true)
            } else {
                window.sessionStorage.setItem('tracking', false)
            }
        })
        .catch((error) => {
            window.sessionStorage.setItem('tracking', false)
            return error;
        })
    }
}

export default GuessInfo;