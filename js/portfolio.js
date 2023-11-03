const doc = document;
const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const spinnerSendEmail = `<span class="spinner-border spinner-border-sm"></span>
                            Enviando...`;
const iconSendEmail = `<i class="bi bi-send"></i>
                        Enviar`;
const _projects = [
    {
        id: "suim",
        name: "SUI.M",
        coverImage: 2,
        imagesAmount: 27
    },
    {
        id: "sivacop",
        name: "SIVACOP",
        coverImage: 2,
        imagesAmount: 39
    },
    {
        id: "bieeco",
        name: "BIEECO",
        coverImage: 2,
        imagesAmount: 53
    }
];

const _jobs = [
    {
        logotype: "ferre",
        paddingStyle: "padding: 1rem 2.4rem;",
        widthStyle: "auto",
        name: "FERRE",
        jobLetterId: null
    },
    {
        logotype: "teconline",
        paddingStyle: "padding: 2rem;",
        widthStyle: "inherit",
        name: "Tec Online",
        jobLetterId: null
    },
    {
        logotype: "itnnovation",
        paddingStyle: "padding: 3rem 1rem;",
        widthStyle: "inherit",
        name: "ITNNOVATION",
        jobLetterId: "itn"
    }
];

window.onscroll = function(e) {
    var portfolioLinkClasses = doc.querySelector("#portfolio-link").classList;
    var skillsetLinkClasses = doc.querySelector("#skillset-link").classList;
    var experienceLinkClasses = doc.querySelector("#experience-link").classList;
    var contactLinkClasses = doc.querySelector("#contact-link").classList;

    var heroTop = parseInt(doc.querySelector("#hero").getBoundingClientRect().top);
    var portfolioTop = parseInt(doc.querySelector("#portfolio").getBoundingClientRect().top);
    var skillsetTop = parseInt(doc.querySelector("#skillset").getBoundingClientRect().top);
    var experienceTop = parseInt(doc.querySelector("#experience").getBoundingClientRect().top);
    var contactTop = parseInt(doc.querySelector("#contact").getBoundingClientRect().top);
    var navbarBrandMe = doc.querySelector("#navbar-brand-me");

    if (heroTop <= 0 && portfolioTop > 0) {
        navbarBrandMe.style.display = "none";
        portfolioLinkClasses.remove("active");
        skillsetLinkClasses.remove("active");
        experienceLinkClasses.remove("active");
        contactLinkClasses.remove("active");
    }

    if (portfolioTop <= 0 && skillsetTop > 0) {
        navbarBrandMe.style.display = "block";

        if (!portfolioLinkClasses.contains("active"))
            portfolioLinkClasses.add("active");

        skillsetLinkClasses.remove("active");
        experienceLinkClasses.remove("active");
        contactLinkClasses.remove("active");
    }

    if (skillsetTop <= 0 && experienceTop > 0) {
        navbarBrandMe.style.display = "block";

        if (!skillsetLinkClasses.contains("active"))
            skillsetLinkClasses.add("active");

        portfolioLinkClasses.remove("active");
        experienceLinkClasses.remove("active");
        contactLinkClasses.remove("active");
    }

    if (experienceTop <= 0 && contactTop > 0) {
        navbarBrandMe.style.display = "block";

        if (!experienceLinkClasses.contains("active"))
            experienceLinkClasses.add("active");

        portfolioLinkClasses.remove("active");
        skillsetLinkClasses.remove("active");
        contactLinkClasses.remove("active");
    }

    if (contactTop <= 0) {
        navbarBrandMe.style.display = "block";
        
        if (!contactLinkClasses.contains("active"))
            contactLinkClasses.add("active");

        portfolioLinkClasses.remove("active");
        skillsetLinkClasses.remove("active");
        experienceLinkClasses.remove("active");
    }
}

doc.getElementById("modal-project").addEventListener("show.bs.modal", e => {
    const button = e.relatedTarget;
    const projectId = button.getAttribute("data-project-id");

    var carouselProjectsItems = doc.getElementById("carousel-projects-items");
    carouselProjectsItems.innerHTML = null;

    var carouselItemsHtml = "";
    var project = _projects.find(p => p.id == projectId);

    for (var i = 1; i <= project.imagesAmount; i++) {
        carouselItemsHtml += `<div class="carousel-item ${i == 1 ? "active" : ""}">
                                <img class="d-block w-100" src="assets/imgs/${project.id}/${i}.jpg" />
                            </div>`;
    }
    
    hiddenTagsH6();
    doc.getElementById("modal-project-title").innerText = project.name;
    doc.getElementById("project-description-" + project.id).style.display = "block";
    
    carouselProjectsItems.innerHTML = carouselItemsHtml
});

doc.getElementById("modal-job").addEventListener("show.bs.modal", e => {
    const link = e.relatedTarget;

    var jobId = link.getAttribute("data-job-id");
    var job = _jobs.find(j => j.logotype == jobId);

    hiddenTagsH6();

    var jobLogotype = doc.getElementById("job-logotype");
    var btnJobLetter = doc.getElementById("job-letter");
    
    if (job.logotype == "ferre") {
        jobLogotype.style.width = window.innerWidth <= 490 ? "inherit" : job.widthStyle;
    } else {
        jobLogotype.style.width = job.widthStyle;
    }
    
    jobLogotype.style.maxHeight = "580px";
    jobLogotype.style.maxWidth = "650px";
    jobLogotype.setAttribute("src", "assets/imgs/jobs/" + jobId + ".png");
    doc.getElementById("btn-modal-job-letter-close").setAttribute("data-job-id", job.logotype);

    if (job.jobLetterId != null) {
        btnJobLetter.style.display = "inline";
        doc.getElementById("job-letter-img").setAttribute("src", `assets/imgs/jobs-letters/${job.jobLetterId}.jpg`);
    } else {
        btnJobLetter.style.display = "none";
    }
    
    doc.getElementById("modal-job-title").innerText = job.name;
    doc.getElementById("job-description-" + jobId).style.display = "block";
});

$(doc).ready(function() {
    var projects = "";
    var jobs = "";

    for (var project of _projects) {
        projects += `<a class="project-link" data-bs-toggle="modal" data-bs-target="#modal-project" data-project-id="${project.id}">
                        <span class="project-title">${project.name}</span>
                        <img class="project" src="assets/imgs/${project.id}/${project.coverImage}.jpg" />
                    </a>`
    }

    $("#projects").html(projects);

    for (var job of _jobs) {
        jobs += `<div class="col-sm-4">
                    <img style="${job.paddingStyle}" src="assets/imgs/jobs/${job.logotype}.png" data-bs-toggle="modal" data-bs-target="#modal-job" data-job-id="${job.logotype}" />
                    <h4 class="text-center">${job.name}</h4>
                </div>`;
    }

    $("#jobs").html(jobs);
});

function hiddenTagsH6(){
    var tags = doc.getElementsByTagName("h6");

    for (var h6 of tags)
        h6.style.display = "none";
}

function selectedSection(link) {
    $("a.nav-link").each(function(index, a){
        if ($(a).hasClass("active"))
            $(a).removeClass("active");
    });

    $(link).addClass("active");

    if ($(link).hasClass("nav-link") && window.innerWidth <= 991)
        $("button.navbar-toggler").click();
}

function sendEmail() {
    var emailInput = $("#email");
    var messageInput = $("#message");
    var alertMessageSuccess = $("#alert-message-success");
    var alertMessageFailure = $("#alert-message-failure");

    var emailValue = $(emailInput).val();
    var messageValue = $(messageInput).val();
    var formContact = $("#form-contact");
    var btnSendEmail = $("#btn-send-email");
    var invalid = false;

    var complete = function () {
        $(formContact).removeClass("was-validated");
        $(emailInput).val("");
        $(messageInput).val("");
        $(btnSendEmail).prop("disabled", false);
        $(btnSendEmail).html(iconSendEmail);
    }

    $(btnSendEmail).prop("disabled", true);
    $(btnSendEmail).html(spinnerSendEmail);

    if (emailValue.lenght > 0) {
        if (!emailValue.match(emailRegex)) {
            if (!$(formContact).hasClass("was-validated"))
                $(formContact).addClass("was-validated");

            invalid = true;
        } else {
            invalid = false;
        }
    } else {
        if (!$(formContact).hasClass("was-validated"))
            $(formContact).addClass("was-validated");

        invalid = true;
    }

    if (messageValue.length == 0) {
        if (!$(formContact).hasClass("was-validated"))
            $(formContact).addClass("was-validated");
        
        invalid = true;
    } else {
        invalid = false;
    }

    if (invalid) {
        $(btnSendEmail).prop("disabled", false);
        $(btnSendEmail).html(iconSendEmail);

        return;
    }

    $.ajax({
        url: "https://formspree.io/f/xknaykoe",
        type: "POST",
        dataType: "json",
        data: {
            email: emailValue,
            message: messageValue
        },
        success: function (response) {
            $(alertMessageSuccess).removeClass("hide");

            if (!$(alertMessageFailure).hasClass("hide"))
                $(alertMessageFailure).addClass("hide");

            setTimeout(() => {
                $(alertMessageSuccess).addClass("hide");
            }, 3000);

            complete();
        },
        error: function (error) {
            console.log(error.responseJson);

            $(alertMessageFailure).removeClass("hide");

            if (!$(alertMessageSuccess).hasClass("hide"))
                $(alertMessageSuccess).addClass("hide");

            setTimeout(() => {
                $(alertMessageFailure).addClass("hide");
            }, 3000);

            complete();
        }
    });
}