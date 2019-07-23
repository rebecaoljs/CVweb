const express = require("express"),
  app = express(),
  CV = require("./models/cv"),
  mongoose = require("mongoose"),
  methodOverride = require("method-override"),
  request = require("request"),
  bodyParser = require("body-parser");

var server_port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
  server_ip_address =
    process.env.PORT || process.env.OPENSHIFT_NODEJS_IP || "0.0.0.0",
  mongo_url =
    process.env.OPENSHIFT_MONGODB_DB_URL ||
    process.env.MONGO_URL ||
    "mongodb://0.0.0.0:27017/",
  db_name = "cv";

mongoose.connect(mongo_url + db_name, {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));

//============================================================

// INDEX ROUTE - FIND ALL CVS IN DB
app.get("/", function(req, res) {
  // res.render("home");
  CV.find({}, function(err, cv) {
    if (err) {
      console.log("ERROR!");
    } else {
      res.render("main", { cv: cv });
      console.log("TESTING");
    }
  });
});

//NEW ROUTE
app.get("/new", function(req, res) {
  res.render("new");
});

//CREATE ROUTE
app.post("/", function(req, res) {
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let streetNumber = req.body.streetNumber;
  let postcode = req.body.postcode;
  let cityInfo = req.body.cityInfo;
  let countryInfo = req.body.countryInfo;
  let typephone = req.body.typephone;
  let phone = req.body.phone;
  let PersonalWebPage = req.body.PersonalWebPage;
  let email = req.body.email;
  let typeContactMsg = req.body.typeContactMsg;
  let msgContact = req.body.msgContact;
  let dayFormBirthday = req.body.dayFormBirthday;
  let monthFormBirthday = req.body.monthFormBirthday;
  let yearFormBirthday = req.body.yearFormBirthday;
  let dateFormatBirthday = req.body.dateFormatBirthday;
  let nationality = req.body.nationality;

  let application = req.body.application;
  let applicationDescription = req.body.applicationDescription;

  let dateDayExperienceFrom = req.body.dateDayExperienceFrom;
  let dateMonthExperienceFrom = req.body.dateMonthExperienceFrom;
  let dateYearExperienceFrom = req.body.dateYearExperienceFrom;
  let dateDayExperienceTo = req.body.dateDayExperienceTo;
  let dateMonthExperienceTo = req.body.dateMonthExperienceTo;
  let dateYearExperienceTo = req.body.dateYearExperienceTo;
  let onGoingExperience = req.body.onGoingExperience;
  let dateFormatExperience = req.body.dateFormatExperience;
  let role = req.body.role;
  let employer = req.body.employer;
  let cityEmployer = req.body.cityEmployer;
  let countryEmployer = req.body.countryEmployer;
  let moreDetailExperience = req.body.moreDetailExperience;
  let adressEmployer = req.body.adressEmployer;
  let postCodeEmployer = req.body.postCodeEmployer;
  let websiteEmpployer = req.body.websiteEmpployer;
  let branchActivity = req.body.branchActivity;
  let responsibility = req.body.responsibility;

  let dateDayEducationFrom = req.body.dateDayEducationFrom;
  let dateMonthEducationFrom = req.body.dateMonthEducationFrom;
  let dateYearEducationFrom = req.body.dateYearEducationFrom;
  let dateDayEducationTo = req.body.dateDayEducationTo;
  let dateMonthEducationTo = req.body.dateMonthEducationTo;
  let dateYearEducationTo = req.body.dateYearEducationTo;
  let onGoingEducation = req.body.onGoingEducation;
  let dateFormatEducation = req.body.dateFormatEducation;
  let professionalQualification = req.body.professionalQualification;
  let educationalInstitution = req.body.educationalInstitution;
  let cityEducationalInstitution = req.body.cityEducationalInstitution;
  let countryEducationalInstituition = req.body.countryEducationalInstituition;
  let moreDetailEducation = req.body.moreDetailEducation;
  let adressNumberEducationalInstituition =
    req.body.adressNumberEducationalInstituition;
  let postCodeEducationalInstituition =
    req.body.postCodeEducationalInstituition;
  let websiteEducationalInstituition = req.body.websiteEducationalInstituition;
  let nationalClassification = req.body.nationalClassification;
  let subjects = req.body.subjects;

  let motherLanguage = req.body.motherLanguage;
  let comunication = req.body.comunication;
  let organization = req.body.organization;
  let workSkills = req.body.workSkills;
  let foreignLanguage = req.body.foreignLanguage;
  let oralComprehension = req.body.oralComprehension;
  let understandReading = req.body.understandReading;
  let oralInteraction = req.body.oralInteraction;
  let oralProduction = req.body.oralProduction;
  let writing = req.body.writing;
  let diplomaLanguages = req.body.diplomaLanguages;
  let informationProcessing = req.body.informationProcessing;
  let informationComunication = req.body.informationComunication;
  let contentCreation = req.body.contentCreation;
  let digitalSecurity = req.body.digitalSecurity;
  let troubleshooting = req.body.troubleshooting;
  let diplomaDigitalSkills = req.body.diplomaDigitalSkills;
  let moreInformaticSkills = req.body.moreInformaticSkills;

  let newCV = {
    firstName: firstName,
    lastName: lastName,
    streetNumber: streetNumber,
    postcode: postcode,
    cityInfo: cityInfo,
    countryInfo: countryInfo,
    typephone: typephone,
    phone: phone,
    PersonalWebPage: PersonalWebPage,
    email: email,
    typeContactMsg: typeContactMsg,
    msgContact: msgContact,
    dayFormBirthday: dayFormBirthday,
    monthFormBirthday: monthFormBirthday,
    yearFormBirthday: yearFormBirthday,
    dateFormatBirthday: dateFormatBirthday,
    nationality: nationality,
    application: application,
    applicationDescription: applicationDescription,
    dateDayExperienceFrom: dateDayExperienceFrom,
    dateMonthExperienceFrom: dateMonthExperienceFrom,
    dateYearExperienceFrom: dateYearExperienceFrom,
    dateDayExperienceTo: dateDayExperienceTo,
    dateMonthExperienceTo: dateMonthExperienceTo,
    dateYearExperienceTo: dateYearExperienceTo,
    onGoingExperience: onGoingExperience,
    dateFormatExperience: dateFormatExperience,
    role: role,
    employer: employer,
    cityEmployer: cityEmployer,
    countryEmployer: countryEmployer,
    moreDetailExperience: moreDetailExperience,
    adressEmployer: adressEmployer,
    postCodeEmployer: postCodeEmployer,
    websiteEmpployer: websiteEmpployer,
    branchActivity: branchActivity,
    responsibility: responsibility,
    dateDayEducationFrom: dateDayEducationFrom,
    dateMonthEducationFrom: dateMonthEducationFrom,
    dateYearEducationFrom: dateYearEducationFrom,
    dateDayEducationTo: dateDayEducationTo,
    dateMonthEducationTo: dateMonthEducationTo,
    dateYearEducationTo: dateYearEducationTo,
    onGoingEducation: onGoingEducation,
    dateFormatEducation: dateFormatEducation,
    professionalQualification: professionalQualification,
    educationalInstitution: educationalInstitution,
    cityEducationalInstitution: cityEducationalInstitution,
    countryEducationalInstituition: countryEducationalInstituition,
    moreDetailEducation: moreDetailEducation,
    adressNumberEducationalInstituition: adressNumberEducationalInstituition,
    postCodeEducationalInstituition: postCodeEducationalInstituition,
    websiteEducationalInstituition: websiteEducationalInstituition,
    nationalClassification: nationalClassification,
    subjects: subjects,
    motherLanguage: motherLanguage,
    comunication: comunication,
    organization: organization,
    workSkills: workSkills,
    foreignLanguage: foreignLanguage,
    oralComprehension: oralComprehension,
    understandReading: understandReading,
    oralInteraction: oralInteraction,
    oralProduction: oralProduction,
    writing: writing,
    diplomaLanguages: diplomaLanguages,
    informationProcessing: informationProcessing,
    informationComunication: informationComunication,
    contentCreation: contentCreation,
    digitalSecurity: digitalSecurity,
    troubleshooting: troubleshooting,
    diplomaDigitalSkills: diplomaDigitalSkills,
    moreInformaticSkills: moreInformaticSkills
  };

  CV.create(newCV, function(err, newlyCV) {
    if (err) {
      console.log(err);
    } else {
      console.log(newlyCV);
      res.redirect("/");
    }
  });
});

//SHOW ROUTE
app.get("/:id", function(req, res) {
  CV.findById(req.params.id, function(err, foundCV) {
    if (err) {
      console.log(err);
    } else {
      res.render("show", { foundCV: foundCV });
    }
  });
});

//EDIT ROUTE

//UPDATE ROUTE

//DESTROY ROUTE

app.listen(server_port, server_ip_address, function() {
  console.log(
    "Listening to requests on http://" + server_ip_address + ":" + server_port
  );
});
