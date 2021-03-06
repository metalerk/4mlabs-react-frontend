const GuessInfo = () => {
    let dateOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZoneName: 'short',
    };
    let info = {
        timestamp: new Date().toLocaleDateString('es-MX', dateOptions),
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
            provider: 'ipstack',
            data: []
        }
    }
    if (!window.sessionStorage.getItem('tracking')) {
        fetch("https://react-4mlabs-backend-tracker.herokuapp.com/visitorinfo",
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
    return info
}

export default GuessInfo;