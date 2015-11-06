function getEl(id) {
    return document.getElementById(id);
}

function getVal(id) {
    return document.getElementById(id).value;
}

function genBook() {
    var firstName = getVal("firstName");
    var lastName = getVal("lastName");
    var bookTitle = getVal("bookTitle");
    var pubCity = getVal("pubCity");
    var pubName = getVal("pubName");
    var pubYear = getVal("pubYear");
    var out = lastName + ", " + firstName + ". <i>" + bookTitle + "</i>. " + pubCity + ": " + pubName + ", " + pubYear + ". Print.";
    getEl("bookOut").innerHTML = (out == ", . <i></i>. : , . Print.") ? "I don't think that's a real book." : out;
}

function genSite() {
    var pageAuthorFirst = getVal("pageAuthorFirst");
    var pageAuthorLast = getVal("pageAuthorLast");
    var pageTitle = getVal("pageTitle");
    var siteTitle = getVal("siteTitle");
    var siteSponsor = getVal("siteSponsor") == "" ? "n.p." : getVal("siteSponsor");
    var datePub = getVal("datePub") == "" ? "n.d." : getVal("datePub");
    var dateAcc = getVal("dateAcc") == "" ? "n.d." : getVal("dateAcc");
    if (pageTitle[pageTitle.length - 1] != "." || pageTitle[pageTitle.length - 1] != "?" || pageTitle[pageTitle.length - 1] != "!") pageTitle += ".";
    var out = pageAuthorLast + ", " + pageAuthorFirst + ". " + "\"" + pageTitle + "\"<i> " + siteTitle + "</i>. " + siteSponsor + ", " + datePub + ". Web. " + dateAcc;
    console.log(out);
    getEl("siteOut").innerHTML = (out == ", . \".\"<i> </i>.n.p., n.d.. Web. n.d.") ? "I don't think that's a real site." : out;
}