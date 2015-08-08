greerApp.service('PropertyService', function() {

    var propertyObject = {
        'star-mill': {
            name: 'Star Mill',
            address: 'address',
            details: 'details',
            leased: false,
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
        },
        'alpine-barn': {
            name: 'Alpine Barn',
            address: 'address',
            details: 'details',
            leased: false,
            imageMain: 'home-bkg-1.jpg',
            images: []
        },
        '32-ashton': {
            name: '32 Ashton',
            address: 'address',
            details: 'details',
            leased: false,
            imageMain: '32-ashton-main.jpg',
            images: []
        },
        'lehi-factory': {
            name: 'Lehi Factory',
            address: 'address',
            details: 'details',
            leased: false,
            imageMain: 'lehi-factory-main.jpg',
            images: []
        },
        'noahs': {
            name: 'Noah\'s',
            address: 'address',
            details: 'details',
            leased: false,
            imageMain: 'noahs-main.jpg',
            images: []
        },
        'rod-works': {
            name: 'Rod Works',
            address: 'address',
            details: 'details',
            leased: false,
            imageMain: 'rod-works-main.jpg',
            images: []
        }
    };

    return {
        getProperty: function(propertyName) {
            return propertyObject[propertyName];
        }
    }
});