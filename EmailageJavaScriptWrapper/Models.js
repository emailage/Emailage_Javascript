class RequestObject {
    constructor(email, ip, digitalidentityscore, firstname, lastname, phone, secondary_email,
        existingcustomer, customerid, partnerid, customeridentifier, billaddress, billcity,
        billregion, billpostal, billcountry, shipaddress, shipcity, shipregion, shippostal,
        shipcountry, cardfirstsix, hashedcardnumber, transmount, transcurrency, transorigin,
        urid, timetoservice, servicedate, servicelocation, servicedetail, servicecategory,
        deliverytype, useragent, deviceid, devicesource, useremail, acceptlang, responselanguage,
        trackingid, correlationid) {
        this.email = email;
        this.ip =  ip;
        this.digitalidentityscore =  digitalidentityscore;
        this.firstname =  firstname;
        this.lastname =  lastname;
        this.phone =  phone;
        this.secondary_email =  secondary_email;
        this.existingcustomer =  existingcustomer;
        this.customerid =  customerid;
        this.partnerid =  partnerid;
        this.customeridentifier =  customeridentifier;
        this.billaddress =  billaddress;
        this.billcity =  billcity;
        this.billregion =  billregion;
        this.billpostal =  billpostal;
        this.billcountry =  billcountry;
        this.shipaddress =  shipaddress;
        this.shipcity =  shipcity;
        this.shipregion =  shipregion;
        this.shippostal =  shippostal;
        this.shipcountry =  shipcountry;
        this.cardfirstsix =  cardfirstsix;
        this.hashedcardnumber =  hashedcardnumber;
        this.transmount =  transmount;
        this.transcurrency =  transcurrency;
        this.transorigin =  transorigin //enum;
        this.urid =  urid;
        this.timetoservice =  timetoservice;
        this.servicedate =  servicedate;
        this.servicelocation =  servicelocation;
        this.servicedetail =  servicedetail;
        this.servicecategory =  servicecategory;
        this.deliverytype =  deliverytype;
        this.useragent =  useragent;
        this.deviceid =  deviceid;
        this.devicesource =  devicesource; //enum
        this.useremail =  useremail;
        this.acceptlang =  acceptlang;
        this.responselanguage =  responselanguage;
        this.trackingid =  trackingid;
        this.correlationid =  correlationid;
    }
}


class Result {
    constructor(
        userdefinedrecordid,
        email,
        ipaddress,
        eName,
        emailAge,
        email_creation_days,
        domainAge,
        domain_creation_days,
        firstVerificationDate,
        first_seen_days,
        lastVerificationDate,
        status, //enum
        country, //two letter Country code.
        fraudRisk,
        EAScore, //enum
        EAReason, //enum
        EAStatusID, //enum
        EAReasonID, //enum
        EAAdviceID, //enum
        EAAdvice, //enum
        EARiskBandID, //enum
        EARiskBand,
        source_industry,
        fraud_type, //?
        lastflaggedon,
        location,
        smfriends,
        totalhits,
        uniquehits,
        imageurl,
        emailExists, //yes/no
        domainExists, //yes/no
        company,
        title,
        domainname,
        domaincompany,
        domaincountryname,
        domaincategory,
        domaincorporate, //yes/no
        domainrisklevel,
        domainrelevantinfo,
        domainrisklevelID,//enum
        domainrelevantinfoID, //enum,
        domainriskcountry, //yes/no
        smlinks,
        ip_risklevelid, //enum
        ip_risklevel,
        ip_riskreasonid, //enum
        ip_riskreason,
        ip_reputation,
        ip_anonymousdetected, //yes/no
        ip_proxytype,
        ip_proxydescription,
        ip_isp,
        ip_org,
        ip_userType,
        ip_netSpeedCell,
        ip_corporateProxy, //yes/no
        ip_continentCode, //code
        ip_country, //country name
        ip_countryCode, //two letter country code
        ip_region, //region name
        ip_city,
        ip_callingcode, //?
        ip_metroCode,
        ip_latitude,
        ip_longitude,
        ip_map,
        ipcountrymatch,
        ipriskcountry,
        ipdistancekm,
        ipdistancemil,
        ipaccuracyradius,
        iptimezone,
        ipasnum,
        ipdomain,
        ip_countryconf,
        ip_regionconf,
        ip_cityconf,
        ip_postalcode,
        ip_postalconf,
        ip_riskscore,
        custphoneInbillingloc,
        citypostalmatch,
        shipcitypostalmatch,
        phone_status,
        shipforward,
        phoneowner,
        overallDigitalIdentityScore,
        emailToIpConfidence,
        emailToPhoneConfidence,
        emailToBillAddressConfidence,
        emailToShipAddressConfidence,
        emailToFullNameConfidence,
        emailToLastNameConfidence,
        ipToPhoneConfidence,
        ipToBillAddressConfidence,
        ipToShipAddressConfidence,
        ipToFullNameConfidence,
        ipToLastNameConfidence,
        phoneToBillAddressConfidence,
        phoneToShipAddressConfidence,
        phoneToFullNameConfidence,
        phoneToLastNameConfidence,
        billAddressToFullNameConfidence,
        billAddressToLastNameConfidence,
        shipAddressToBillAddressConfidence,
        shipAddressToFullNameConfidence,
        shipAddressToLastNameConfidence,
        phoneownertype,
        phonecarriertype,
        phonecarriernetworkcode,
        phonecarriername,
        phoneownermatch,
        issuerBank,
        issuerBrand,
        issuerCountry,
        cardCategory,
        cardType,
        billriskcountry,
        trackingId,
        correlationId,
        deviceIdRiskLevel,
        socialMediaLinks) {
            this.userdefinedrecordid = userdefinedrecordid;
            this.email = email;
            this.ipaddress = ipaddress;
            this.eName = eName;
            this.emailAge = emailAge;
            this.email_creation_days = email_creation_days;
            this.domainAge = domainAge;
            this.domain_creation_days = domain_creation_days;
            this.firstVerificationDate = firstVerificationDate;
            this.first_seen_days = first_seen_days;
            this.lastVerificationDate = lastVerificationDate;
            this.status = status;
            this.country = country; //two letter Country code.
            this.fraudRisk = fraudRisk;
            this.EAScore = EAScore; //enum
            this.EAReason = EAReason; //enum
            this.EAStatusID = EAStatusID; //enum
            this.EAReasonID = EAReasonID; //enum
            this.EAAdviceID = EAAdviceID; //enum
            this.EAAdvice = EAAdvice; //enum
            this.EARiskBandID = EARiskBandID; //enum
            this.EARiskBand = EARiskBand;
            this.source_industry = source_industry;
            this.fraud_type = fraud_type; //?
            this.lastflaggedon = lastflaggedon;
            this.location = location;
            this.smfriends = smfriends;
            this.totalhits = totalhits;
            this.uniquehits = uniquehits;
            this.imageurl = imageurl;
            this.emailExists =  emailExists; //yes/no
            this.domainExists = domainExists; //yes/no
            this.company = company;
            this.title = title;
            this.domainname = domainname;
            this.domaincompany = domaincompany;
            this.domaincountryname = domaincountryname;
            this.domaincategory = domaincategory;
            this.domaincorporate = domaincorporate;//yes/no
            this.domainrisklevel = domainrisklevel;
            this.domainrelevantinfo = domainrelevantinfo;
            this.domainrisklevelID = domainrisklevelID; //enum
            this.domainrelevantinfoID = domainrelevantinfoID; //enum =
            this.domainriskcountry = domainriskcountry; //yes/no
            this.smlinks = socialMediaLinks;
            this.ip_risklevelid = ip_risklevelid; //enum
            this.ip_risklevel = ip_risklevel;
            this.ip_riskreasonid = ip_riskreasonid; //enum
            this.ip_riskreason = ip_riskreason;
            this.ip_reputation = ip_reputation;
            this.ip_anonymousdetected =  ip_anonymousdetected;//yes/no
            this.ip_proxytype = ip_proxytype;
            this.ip_proxydescription = ip_proxydescription;
            this.ip_isp = ip_isp;
            this.ip_org = ip_org;
            this.ip_userType = ip_userType;
            this.ip_netSpeedCell = ip_netSpeedCell;
            this.ip_corporateProxy = ip_corporateProxy; //yes/no
            this.ip_continentCode = ip_continentCode; //code
            this.ip_country = ip_country;//country name
            this.ip_countryCode = ip_countryCode; //two letter country code
            this.ip_region = ip_region; //region name
            this.ip_city = ip_city;
            this.ip_callingcode = ip_callingcode;//?
            this.ip_metroCode = ip_metroCode;
            this.ip_latitude = ip_latitude;
            this.ip_longitude = ip_longitude;
            this.ip_map = ip_map;
            this.ipcountrymatch = ipcountrymatch;
            this.ipriskcountry = ipriskcountry;
            this.ipdistancekm = ipdistancekm;
            this.ipdistancemil = ipdistancemil;
            this.ipaccuracyradius = ipaccuracyradius;
            this.iptimezone = iptimezone;
            this.ipasnum = ipasnum;
            this.ipdomain = ipdomain;
            this.ip_countryconf = ip_countryconf;
            this.ip_regionconf = ip_regionconf;
            this.ip_cityconf = ip_cityconf;
            this.ip_postalcode = ip_postalcode;
            this.ip_postalconf = ip_postalconf;
            this.ip_riskscore = ip_riskscore;
            this.custphoneInbillingloc = custphoneInbillingloc;
            this.citypostalmatch = citypostalmatch;
            this.shipcitypostalmatch = shipcitypostalmatch;
            this.phone_status = phone_status;
            this.shipforward = shipforward;
            this.phoneowner = phoneowner;
            this.overallDigitalIdentityScore =overallDigitalIdentityScore;
            this.emailToIpConfidence = emailToIpConfidence;
            this.emailToPhoneConfidence = emailToPhoneConfidence;
            this.emailToBillAddressConfidence = emailToBillAddressConfidence;
            this.emailToShipAddressConfidence = emailToShipAddressConfidence;
            this.emailToFullNameConfidence = emailToFullNameConfidence;
            this.emailToLastNameConfidence = emailToLastNameConfidence;
            this.ipToPhoneConfidence = ipToPhoneConfidence;
            this.ipToBillAddressConfidence = ipToBillAddressConfidence;
            this.ipToShipAddressConfidence = ipToShipAddressConfidence;
            this.ipToFullNameConfidence = ipToFullNameConfidence;
            this.ipToLastNameConfidence = ipToLastNameConfidence;
            this.phoneToBillAddressConfidence = phoneToBillAddressConfidence;
            this.phoneToShipAddressConfidence = phoneToShipAddressConfidence;
            this.phoneToFullNameConfidence = phoneToFullNameConfidence;
            this.phoneToLastNameConfidence = phoneToLastNameConfidence;
            this.billAddressToFullNameConfidence = billAddressToFullNameConfidence;
            this.billAddressToLastNameConfidence = billAddressToLastNameConfidence;
            this.shipAddressToBillAddressConfidence = shipAddressToBillAddressConfidence;
            this.shipAddressToFullNameConfidence = shipAddressToFullNameConfidence;
            this.shipAddressToLastNameConfidence = shipAddressToLastNameConfidence;
            this.phoneownertype = phoneownertype;
            this.phonecarriertype = phonecarriertype;
            this.phonecarriernetworkcode = phonecarriernetworkcode;
            this.phonecarriername = phonecarriername;
            this.phoneownermatch = phoneownermatch;
            this.issuerBank = issuerBank;
            this.issuerBrand = issuerBrand;
            this.issuerCountry = issuerCountry;
            this.cardCategory = cardCategory;
            this.cardType = cardType;
            this.billriskcountry = billriskcountry;
            this.trackingId = trackingId;
            this.correlationId = correlationId;
            this.deviceIdRiskLevel = deviceIdRiskLevel;
            }
}
