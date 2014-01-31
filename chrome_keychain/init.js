var keys = [ 'USERNAME', 'PASSWORD' ],
    settings;

chrome.storage.local.get(keys, function(item)
{
    settings = item;
});

window.addEventListener('keydown', function (event)
{
    if (event.shiftKey)
    {
        switch (event.keyCode)
        {
            case 35: _logout(); break;
            case 36: _login(); break;
        }
    }
});

function _logout()
{
    document.location.href = 'http://koebu.com/logout';
}

function _login()
{
    console.log( settings );
    document.getElementById('username').value = settings['USERNAME'];
    document.getElementById('password').value = settings['PASSWORD'];
    document.querySelectorAll('#boxForm form')[0].submit();
}

