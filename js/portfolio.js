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
        imagesAmount: 27,
        description: "SUI.M, es un sistema único de información para el manejo, administración y seguimiento de las operaciones diarias de Meccano de México, esta desarrollado en ASP.NET MVC (C#), HTML, CSS, JS, jQuery, Bootstrap y SQL Server."
    },
    {
        id: "sivacop",
        name: "SIVACOP",
        coverImage: 30,
        imagesAmount: 39,
        description: "SIVACOP es un sistema para la confirmación de pagos echos con cheque desarrollado para la empresa VentAcero, el sistema valida los depositos consultando el/los movimiento(s) mediante la API del banco, si el deposito consultado no tiene fondos se mostrara un mensaje indicandolo, de la misma manera si este deposito ya fue reclamado el sistema indicara que ya ha sido adjudicado para evitar entregar mercancia no pagada o reclamada nuevamente, el proyecto esta desarrollado en ASP.NET Core (C#), HTML, CSS, JS, Bootstrap, jQuery y SQL Server."
    },
    {
        id: "bieeco",
        name: "BIEECO",
        coverImage: 2,
        imagesAmount: 53,
        description: "BIEECO es un sistema para el control y registro de la entrada y salida de materiales o residuos peligrosos que son tratados o manipulados por Bienes Ecologicos, esta desarrollado en ASP.NET Core (C#), HTML. CSS, Javascript, jQuery, Bootstrap, SQL Server."
    },
    {
        id: "sivacab",
        name: "SIVACAB",
        coverImage: 1,
        imagesAmount: 43,
        description: "SIVACAB es un sistema para el calculo de bonos mensuales y trimestrales desarrollado para la empresa VentAcero, el sistema realiza el calculo del monto de los bonos por empleado en base a el/los indicador(es) y resultados obtenidos evaluando el % de pago dependiendo del objetivo establecido por indicador, una vez calculado los bonos estos pueden ser exportados a un archivo Excel ya sea bonos por empleado e indicador o bonos por empleado, el proyecto esta desarrollador en ASP.NET MVC (C#), HTML, CSS, JS, Bootstrap, jQuery y SQL Server."
    }
];

const _jobs = [
    {
        logotype: "ferre",
        paddingStyle: "padding: 1rem 2.4rem;",
        widthStyle: "auto",
        name: "FERRÉ",
        jobLetterId: null,
        description: "Trabaje en Desarrollo comercial FERRÉ como Programador Analista en la integración de un nuevo modulo para su sistema SITIC, el cual es una sistema ERP y DMS que esta diseñado específicamente para empresas de distribución, comercialización, centros de servicio, concesionarias de vehículos y empresas transportistas en México y Latinoamérica."
    },
    {
        logotype: "teconline",
        paddingStyle: "padding: 2rem;",
        widthStyle: "inherit",
        name: "Tec Online",
        jobLetterId: null,
        description: "Trabaje en Tec Online como Programador/Auxiliar de sistemas donde colabore en la implementación de nuevas funcionalidades para un sistema de control de producción para una mueblería, como también en la mejora y corrección de errores reportados por los usuarios del sistema."
    },
    {
        logotype: "itnnovation",
        paddingStyle: "padding: 3rem 1rem;",
        widthStyle: "inherit",
        name: "ITNNOVATION",
        jobLetterId: "itn",
        description: "Trabaje en ITNNOVATION como Ingeniero de desarrollo donde participe en varios proyectos, uno de ellos fue en un sistema CMS(Content Managament System) para ERICSSON Perú donde yo implemente nuevas características y a su vez corregí los errores reportados por el cliente, otro proyecto donde participe fue en el desarrollo de un sistema para el registro de la entrada y salida de material o residuos peligrosos para Bieeco(Bienes Ecológicos) y en uno de los últimos proyectos en los que colabore fue en el desarrollo de un sistema para la confirmación de pagos o depósitos para VentAcero."
    },
    {
        logotype: "ventacero",
        paddingStyle: "padding: 3rem 1rem",
        widthStyle: "inherit",
        name: "VentAcero",
        jobLetterId: null,
        description: "Trabaje con VentAcero como freelancer en el desarrollo de un sistema para el cálculo automático de bonos semestrales y trimestales que se le paga a todos los empleados de sus nómina y tambien briende soporte a un sistema de confirmación de pagos desarrollado por mi anteriormente cuando estube laborando en la empresa ITNNOVATION."
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
    
    doc.getElementById("modal-project-title").innerText = project.name;
    doc.getElementById("project-description").innerText = project.description;
    
    carouselProjectsItems.innerHTML = carouselItemsHtml
});

doc.getElementById("modal-job").addEventListener("show.bs.modal", e => {
    const link = e.relatedTarget;

    var jobId = link.getAttribute("data-job-id");
    var job = _jobs.find(j => j.logotype == jobId);

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
    doc.querySelector("#job-description").innerText = job.description;
});

$(doc).ready(function() {
    var projects = "";
    var jobs = "";

    for (var project of _projects) {
        projects += `<a class="project-link" data-bs-toggle="modal" data-bs-target="#modal-project" data-project-id="${project.id}" title="click para ver">
                        <span class="project-title">${project.name}</span>
                        <img class="project" src="assets/imgs/${project.id}/${project.coverImage}.jpg" />
                    </a>
                    <h4 class="text-center subtitle">
                        ${project.name}
                        <subtitle>(Toca para ver)</subtitle>
                    </h4>`
    }

    $("#projects").html(projects);

    for (var job of _jobs) {
        jobs += `<div class="col-sm-4">
                    <img style="${job.paddingStyle}" src="assets/imgs/jobs/${job.logotype}.png" data-bs-toggle="modal" data-bs-target="#modal-job" data-job-id="${job.logotype}" title="click para ver" />
                    <h4 class="text-center">
                        ${job.name}
                        <subtitle>(Toca para ver)</subtitle>
                    </h4>
                </div>`;
    }

    $("#jobs").html(jobs);
});

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
    var invalidEmail = false;
    var invalidMessage = false;

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

            invalidEmail = true;
        } else 
            invalidEmail = false;
    } else {
        if (!$(formContact).hasClass("was-validated"))
            $(formContact).addClass("was-validated");

        invalidEmail = true;
    }

    if (messageValue.length == 0) {
        if (!$(formContact).hasClass("was-validated"))
            $(formContact).addClass("was-validated");
        
        invalidMessage = true;
    } else {
        invalidMessage = false;
    }

    if (invalidEmail || invalidMessage) {
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