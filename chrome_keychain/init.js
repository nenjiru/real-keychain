var USERNAME = '',
    PASSWORD = '';

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
    document.getElementById('username').value = USERNAME;
    document.getElementById('password').value = PASSWORD;
    document.querySelectorAll('#boxForm form')[0].submit();
}

