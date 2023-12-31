export const API_URLS = {
    saveSentEmail:{
        endpoint: 'save',
        method: 'POST'
    },
    getEmailFromType:{
        endpoint: 'emails',
        method: 'GET'
    },
    saveDraftEmail:{
        endpoint: 'save-draft',
        method: 'POST'
    },
    moveEmailsToBin:{
        endpoint: 'save-bin',
        method: 'POST'
    }, 
    toggleStarredEmail:{
        endpoint:'starred',
        method: 'POST'
    },
    deleteEmail:{
        endpoint: 'delete',
        method: 'DELETE'
    }

}