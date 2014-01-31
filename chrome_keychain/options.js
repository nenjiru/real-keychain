function saveOptions ()
{
    var item = {
        'USERNAME': document.getElementById('UID').value,
        'PASSWORD': document.getElementById('PWD').value
    };

    chrome.storage.local.set(item, function()
    {
        console.log('item saved.');
    });
}

function loadOptions()
{
    var keys = [ 'USERNAME', 'PASSWORD' ];
    chrome.storage.local.get(keys, function(item)
    {
        document.getElementById('UID').value = item.USERNAME || '';
        document.getElementById('PWD').value = item.PASSWORD || '';
    });
}

document.getElementById('Button').addEventListener('click', saveOptions);
loadOptions();
