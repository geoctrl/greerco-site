greerApp.service('PropertyService', function() {

    var propertyObject = {
        'star-mill': {
            name: 'Star Mill',
            address: 'address',
            details: 'details',
            leased: true,
            imageMain: 'star-mill-main.jpg',
            images: [
                'star-mill-1.jpg',
                'star-mill-2.jpg',
                'star-mill-3.jpg',
                'star-mill-4.jpg',
                'star-mill-5.jpg',
                'star-mill-6.jpg',
                'star-mill-7.jpg',
                'star-mill-8.jpg',
                'star-mill-9.jpg',
                'star-mill-10.jpg',
                'star-mill-11.jpg',
                'star-mill-12.jpg'
            ]
        }
    };

    return {
        getProperty: function(propertyName) {
            return propertyObject[propertyName];
        }
    }
});