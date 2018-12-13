{
    window.eventHub.emit('aEvent',{
        data:'这是a发布的数据'
    })
    window.eventHub.emit('bEvent',{
        data:'这是b发布的数据'
    })
}