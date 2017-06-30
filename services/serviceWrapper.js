directPortalApp.factory('serviceWrapper', function (metadataService, approvalService,
    buildingService,
    buildingphaseService,
    buildingstatusService,
    buildingstatustypeService,
    calendareventService,
    complexService,
    configurationService,
    contactaddressService,
    contactaddresstypeService,
    contactdetailService,
    contactdetailtypeService,
    contractService,
    contractdetailService,
    contractdetailtypeService,
    countryService,
    developerService,
    documentService,
    documenttypeService,
    entityService,
    entitypropertyService,
    entitytypeService,
    featureService,
    featuretypeService,
    floorplanService,
    languageService,
    marketingmaterialService,
    marketingmaterialtypeService,
    messageService,
    nationalityService,
    noteService,
    notificationService,
    organizationunitService,
    organizationunitstatusService,
    organizationunittypeService,
    ownershiptypeService,
    paymentService,
    paymentmethodService,
    paymentpartService,
    paymenttypeService,
    performanceindicatorService,
    performanceindicatortypeService,
    permissionService,
    personService,
    personprefixService,
    persontypeService,
    postService,
    posttypeService,
    presentationService,
    presentationstageService,
    priceService,
    pricetypeService,
    processService,
    queryService,
    quotaService,
    relationshipService,
    relationshiptypeService,
    reportService,
    reservationService,
    reservationstatusService,
    reservationtypeService,
    ruleService,
    saleService,
    salesrequestService,
    salesrequesttypeService,
    salestatusService,
    salestatustypeService,
    subscriptionService,
    taskService,
    templateService,
    translationService,
    unitService,
    unitquotaService,
    unitstatusService,
    unitsubtypeService,
    unittypeService,
    webpageService
) {
    var serviceWrapper = {};
    serviceWrapper.metadata = metadataService;

    serviceWrapper.Approval = approvalService;
    serviceWrapper.Building = buildingService;
    serviceWrapper.BuildingPhase = buildingphaseService;
    serviceWrapper.BuildingStatus = buildingstatusService;
    serviceWrapper.BuildingStatusType = buildingstatustypeService;
    serviceWrapper.CalendarEvent = calendareventService;
    serviceWrapper.Complex = complexService;
    serviceWrapper.Configuration = configurationService;
    serviceWrapper.ContactAddress = contactaddressService;
    serviceWrapper.ContactAddressType = contactaddresstypeService;
    serviceWrapper.ContactDetail = contactdetailService;
    serviceWrapper.ContactDetailType = contactdetailtypeService;
    serviceWrapper.Contract = contractService;
    serviceWrapper.ContractDetail = contractdetailService;
    serviceWrapper.ContractDetailType = contractdetailtypeService;
    serviceWrapper.Country = countryService;
    serviceWrapper.Developer = developerService;
    serviceWrapper.Document = documentService;
    serviceWrapper.DocumentType = documenttypeService;
    serviceWrapper.Entity = entityService;
    serviceWrapper.EntityProperty = entitypropertyService;
    serviceWrapper.EntityType = entitytypeService;
    serviceWrapper.Feature = featureService;
    serviceWrapper.FeatureType = featuretypeService;
    serviceWrapper.FloorPlan = floorplanService;
    serviceWrapper.Language = languageService;
    serviceWrapper.MarketingMaterial = marketingmaterialService;
    serviceWrapper.MarketingMaterialType = marketingmaterialtypeService;
    serviceWrapper.Message = messageService;
    serviceWrapper.Nationality = nationalityService;
    serviceWrapper.Note = noteService;
    serviceWrapper.Notification = notificationService;
    serviceWrapper.OrganizationUnit = organizationunitService;
    serviceWrapper.OrganizationUnitStatus = organizationunitstatusService;
    serviceWrapper.OrganizationUnitType = organizationunittypeService;
    serviceWrapper.OwnershipType = ownershiptypeService;
    serviceWrapper.Payment = paymentService;
    serviceWrapper.PaymentMethod = paymentmethodService;
    serviceWrapper.PaymentPart = paymentpartService;
    serviceWrapper.PaymentType = paymenttypeService;
    serviceWrapper.PerformanceIndicator = performanceindicatorService;
    serviceWrapper.PerformanceIndicatorType = performanceindicatortypeService;
    serviceWrapper.Permission = permissionService;
    serviceWrapper.Person = personService;
    serviceWrapper.PersonPrefix = personprefixService;
    serviceWrapper.PersonType = persontypeService;
    serviceWrapper.Post = postService;
    serviceWrapper.PostType = posttypeService;
    serviceWrapper.Presentation = presentationService;
    serviceWrapper.PresentationStage = presentationstageService;
    serviceWrapper.Price = priceService;
    serviceWrapper.PriceType = pricetypeService;
    serviceWrapper.Process = processService;
    serviceWrapper.Query = queryService;
    serviceWrapper.Quota = quotaService;
    serviceWrapper.Relationship = relationshipService;
    serviceWrapper.RelationshipType = relationshiptypeService;
    serviceWrapper.Report = reportService;
    serviceWrapper.Reservation = reservationService;
    serviceWrapper.ReservationStatus = reservationstatusService;
    serviceWrapper.ReservationType = reservationtypeService;
    serviceWrapper.Rule = ruleService;
    serviceWrapper.Sale = saleService;
    serviceWrapper.SalesRequest = salesrequestService;
    serviceWrapper.SalesRequestType = salesrequesttypeService;
    serviceWrapper.SaleStatus = salestatusService;
    serviceWrapper.SaleStatusType = salestatustypeService;
    serviceWrapper.Subscription = subscriptionService;
    serviceWrapper.Task = taskService;
    serviceWrapper.Template = templateService;
    serviceWrapper.Translation = translationService;
    serviceWrapper.Unit = unitService;
    serviceWrapper.UnitQuota = unitquotaService;
    serviceWrapper.UnitStatus = unitstatusService;
    serviceWrapper.UnitSubType = unitsubtypeService;
    serviceWrapper.UnitType = unittypeService;
    serviceWrapper.WebPage = webpageService;

    serviceWrapper.get = function (service) {

        if (!serviceWrapper.hasOwnProperty(service)) {
            console.log(service);
            throw new Error('ServiceWrapper: Unknown Service: ' + service);
        }
        return serviceWrapper[service];
    };
    return serviceWrapper;
});