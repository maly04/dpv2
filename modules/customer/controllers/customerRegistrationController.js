directPortalApp.controller("customerRegistrationController", function ($scope) {
    $scope.stars = [1, 2, 3, 4, 5];


    $scope.customerName = "";
    $scope.photo = null;
    $scope.personTitles = [
        "Mr.",
        "Miss.",
        "Mrs.",
        "Dr.",
        "Khun",
        "Prof"
    ];

    $scope.purposeOfBuyings = [
        "Buy to rent",
        "Buy to resale",
        "Pro investor",
        "Retire single",
        "Retire couple",
        "Living single",
        "Living couple",
        "Living family",
        "Weekend home",
        "Holiday home",
        "Present for someone"
    ]

    $scope.interests = ["Condominium For Sale", "House For Sale", "Anything For Sale", "Condominium For Rent", "House For Rent", "Anything For Rent", "Commercial Property", "Land"];

    $scope.unitTypes = ["1 Bedroom", "2 Bedroom", "3 Bedroom", "Duplex", "Penthouse", "Shop", "Studio"];

    $scope.customerTypes = [
        "New",
        "Return",
        "Not sure"
    ];

    $scope.countries = ["Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Cook Islands", "Costa Rica", "Croatia (Hrvatska)", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "France Metropolitan", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Guernsey", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard and Mc Donald Islands", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Isle of Man", "Indonesia", "Iran Islamic Republic of", "Iraq", "Ireland", "Israel", "Italy", "Ivory Coast", "Jersey", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea Democratic People's Republic of", "Korea Republic of", "Kosovo", "Kuwait", "Kyrgyzstan", "Lao People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia Federated States of", "Moldova Republic of", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia South Sandwich Islands", "Spain", "Sri Lanka", "St. Helena", "St. Pierre and Miquelon", "Sudan", "Suriname", "Svalbard and Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan", "Tajikistan", "Tanzania United Republic of", "Thailand", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "United States minor outlying islands", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City State", "Venezuela", "Vietnam", "Virgin Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna Islands", "Western Sahara", "Yemen", "Yugoslavia", "Zaire", "Zambia", "Zimbabwe"];

    $scope.customerMetManagementYet = ["Yes", "No", "Maybe"];

    $scope.quotas = ["Foreign", "Thai"];

    $scope.budgetRange = ["1-2m", "2-4m", "4-6m", "6-10m", "10-15m", "15-30m"];

    $scope.unitRequirements = ["Grounded", "Garden", "Low floor", "High floor", "Sea view", "Balcony"];

    $scope.personalities = ["Dove", "Owl", "Peacock", "Eagle"];

    $scope.walkInLocations = [
        "Main Office",
        "Booth",
        "Exhibition",
        "Showroom"];

    $scope.notes = "";
    $scope.currentProperties = ["Yes", "No", "Multiple", "Overseas"];

    $scope.selectedStar = 1;

});