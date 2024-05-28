// navbar
document.getElementById("menu-toggle").addEventListener("click", function () {
  var menu = document.getElementById("menu");
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});

document
  .getElementById("services-toggle-mobile")
  .addEventListener("click", function () {
    var dropdown = document.getElementById("services-dropdown-mobile");
    dropdown.classList.toggle("hidden");
  });

function scrollNav() {
  const navbar = document.getElementById("navbar");
  const btnNav = document.getElementById("btn-nav");
  if (navbar.classList.contains("-translate-y-28")) {
    navbar.classList.remove("-translate-y-28");
    navbar.classList.add("translate-y-0");
    btnNav.classList.remove("rotate-0");
    btnNav.classList.add("rotate-180");
  } else if (navbar.classList.contains("translate-y-0")) {
    navbar.classList.remove("translate-y-0");
    navbar.classList.add("-translate-y-28");
    btnNav.classList.add("rotate-0");
    btnNav.classList.remove("rotate-180");
  }
}

// document.getElementById("materi-toggle").addEventListener("click", function () {
//   var dropdown = document.getElementById("materi-dropdown");
//   dropdown.classList.toggle("hidden");
// });

// open content
function openBox(boxId) {
  const overlay = document.getElementById("blocked");
  const boxContainer = document.getElementById(boxId);
  if (boxContainer.classList.contains("hidden")) {
    boxContainer.classList.remove("hidden");
    overlay.classList.remove("hidden");
    boxContainer.classList.add("block");
    overlay.classList.add("block");
    document.body.classList.add("overflow-hidden");
  } else {
    boxContainer.classList.remove("block");
    boxContainer.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  }
}

// close content
function closeBox(boxId) {
  const overlay = document.getElementById("blocked");
  const boxContainer = document.getElementById(boxId);
  boxContainer.classList.remove("block");
  overlay.classList.remove("block");
  boxContainer.classList.add("hidden");
  overlay.classList.add("hidden");
  document.body.classList.remove("overflow-hidden");
}

// | tracker function |

// function to percent
function map(value, x1, y1, x2, y2) {
  return ((value - x1) * (y2 - x2)) / (y1 - x1) + x2;
}

function pieChartBtn() {
  var piechartBtn = document.getElementById("pie");
  var linechartBtn = document.getElementById("line");
  var lineChart = document.getElementById("lineCard");
  var pieChart = document.getElementById("pieCard");

  piechartBtn.classList.add("bg-bg");
  piechartBtn.classList.remove("bg-primary");
  linechartBtn.classList.remove("bg-bg");
  linechartBtn.classList.add("bg-primary");
  pieChart.classList.add("flex");
  pieChart.classList.remove("hidden");
  lineChart.classList.add("hidden");
  lineChart.classList.remove("block");
  createPieChart();
}

function lineChartBtn() {
  var piechartBtn = document.getElementById("pie");
  var linechartBtn = document.getElementById("line");
  var lineChart = document.getElementById("lineCard");
  var pieChart = document.getElementById("pieCard");
  linechartBtn.classList.add("bg-bg");
  linechartBtn.classList.remove("bg-primary");
  piechartBtn.classList.remove("bg-bg");
  piechartBtn.classList.add("bg-primary");
  lineChart.classList.add("block");
  lineChart.classList.remove("hidden");
  pieChart.classList.add("hidden");
  pieChart.classList.remove("flex");
  createLineChart();
}

function trackerBtn() {
  var inputCard = document.getElementById("inputCard");
  var chartCard = document.getElementById("chartCard");
  inputCard.classList.add("hidden");
  chartCard.classList.add("block");
  chartCard.classList.remove("hidden");
  getData();
  createPieChart();
}

var trash = [];
var object = [];
var objectPredict = [];
var percentConvert = [];
var botolPlastik;
var tasBelanja;
var sedotan;
var kantongMakanan;
var botolProdukMandi;
var kemasanMakanan;
var sigma = 0;
var sortedValues = [];
var sortedObjects = [];
var sigmaData = 0;

function getData() {
  sigmaData = 0;
  percentConvert = [];
  trash = [];
  object = [];

  botolPlastik = parseInt(document.getElementById("value1").value) * 360;
  tasBelanja = parseInt(document.getElementById("value2").value) * 48;
  sedotan = parseInt(document.getElementById("value3").value) * 360;
  kantongMakanan = parseInt(document.getElementById("value4").value) * 48;
  botolProdukMandi = parseInt(document.getElementById("value5").value) * 12;
  kemasanMakanan = parseInt(document.getElementById("value6").value) * 48;
  console.log(botolPlastik);
  // sigma data
  sigma =
    botolPlastik +
    tasBelanja +
    sedotan +
    kantongMakanan +
    botolProdukMandi +
    kemasanMakanan;

  trash = [
    botolPlastik,
    tasBelanja,
    sedotan,
    kantongMakanan,
    botolProdukMandi,
    kemasanMakanan,
  ];

  object = [
    "Botol Plastik",
    "Tas Belanja",
    "Sedotan",
    "Kantong",
    "Produk Mandi",
    "Kemasan",
  ];

  // cek nilai data
  for (i = 0; i < object.length; i++) {
    if (trash[i] <= 0) {
      sigmaData += 0;
    } else {
      sigmaData += 1;
    }
  }

  console.log(sigmaData);

  // comvert data
  for (var i = 0; i < trash.length; i++) {
    var value = (trash[i] / sigma) * 100;
    percentConvert.push(value.toFixed(2));
  }

  // sort data
  var sortedTrash = percentConvert.map((value, index) => {
    return { value: value, object: object[index] };
  });

  sortedTrash.sort((a, b) => {
    return b.value - a.value;
  });

  sortedValues = sortedTrash.map((item) => item.value);
  sortedObjects = sortedTrash.map((item) => item.object);

  console.log(sortedValues);
  var info1 = document.getElementById("info1");
  var info2 = document.getElementById("info2");
  var info3 = document.getElementById("info3");
  var info4 = document.getElementById("info4");
  var info5 = document.getElementById("info5");
  var info5 = document.getElementById("info5");
  var info6 = document.getElementById("info6");
  var amount = document.getElementById("amount");

  amount.innerHTML = sigma;
  info1.innerHTML = sortedObjects[0];
  info2.innerHTML = sortedObjects[1];
  info3.innerHTML = sortedObjects[2];
  info4.innerHTML = sortedObjects[3];
  info5.innerHTML = sortedObjects[4];
  info6.innerHTML = sortedObjects[5];
}

function createPieChart() {
  var barColors = [
    "#FF6969",
    "#FFBA69",
    "#FFDE69",
    "#F3FF69",
    "#D3FF56",
    "#82FF56",
  ];
  new Chart("pieChart", {
    type: "pie",
    data: {
      datasets: [
        {
          backgroundColor: barColors,
          data: sortedValues,
        },
      ],
    },
    options: {
      tooltips: {
        enabled: false,
      },
    },
  });
}

function createLineChart() {
  new Chart("lineChart", {
    type: "line",
    data: {
      labels: object,
      datasets: [
        {
          data: percentConvert,
          borderColor: "#BAD8FF",
          fill: true,
          backgroundColor: "rgba(255, 255, 255, 0.3)",
          pointBackgroundColor: "#044D90",
        },
      ],
    },
    options: {
      legend: {
        display: false,
      },
      scales: {
        yAxes: [
          {
            ticks: {
              fontColor: "white",
            },
            grid: {
              color: "white",
            },
          },
        ],
        xAxes: [
          {
            ticks: {
              fontColor: "white",
            },
            grid: {
              color: "white",
            },
          },
        ],
      },
    },
  });
}

// fungsi menghitung penguraian sampah patokan 450 thun
function trashCompos(a) {
  var perSampah = a / 12;
  var perbulan = perSampah * 450;
  return perbulan.toFixed(0);
}

// fungsi send data ke rincian
function sendData() {
  var rincian = document.getElementById("rincian");
  rincian.classList.remove("hidden");
  rincian.classList.add("block");

  var cards = {
    card1: {
      cardBody: document.getElementById("cardDec1"),
      title: document.getElementById("cardTitle1"),
      percent: document.getElementById("percValue1"),
      pcs: document.getElementById("pcsValue1"),
      pcsDec: document.getElementById("pcsDec1"),
      compos: document.getElementById("compos1"),
      save: document.getElementById("save1"),
      percObject: document.getElementById("percObject1"),
      nameObject: document.getElementById("nameObject1"),
      pcsObject: document.getElementById("pcsObject1"),
      solObject: document.getElementById("solObject1"),
      saveObject: document.getElementById("saveObject1"),
    },
    card2: {
      cardBody: document.getElementById("cardDec2"),
      title: document.getElementById("cardTitle2"),
      percent: document.getElementById("percValue2"),
      pcs: document.getElementById("pcsValue2"),
      pcsDec: document.getElementById("pcsDec2"),
      compos: document.getElementById("compos2"),
      save: document.getElementById("save2"),
      percObject: document.getElementById("percObject2"),
      nameObject: document.getElementById("nameObject2"),
      pcsObject: document.getElementById("pcsObject2"),
      solObject: document.getElementById("solObject2"),
      saveObject: document.getElementById("saveObject2"),
    },
    card3: {
      cardBody: document.getElementById("cardDec3"),
      title: document.getElementById("cardTitle3"),
      percent: document.getElementById("percValue3"),
      pcs: document.getElementById("pcsValue3"),
      pcsDec: document.getElementById("pcsDec3"),
      compos: document.getElementById("compos3"),
      save: document.getElementById("save3"),
      percObject: document.getElementById("percObject3"),
      nameObject: document.getElementById("nameObject3"),
      pcsObject: document.getElementById("pcsObject3"),
      solObject: document.getElementById("solObject3"),
      saveObject: document.getElementById("saveObject3"),
    },
    card4: {
      cardBody: document.getElementById("cardDec4"),
      title: document.getElementById("cardTitle4"),
      percent: document.getElementById("percValue4"),
      pcs: document.getElementById("pcsValue4"),
      pcsDec: document.getElementById("pcsDec4"),
      compos: document.getElementById("compos4"),
      save: document.getElementById("save4"),
      percObject: document.getElementById("percObject4"),
      nameObject: document.getElementById("nameObject4"),
      pcsObject: document.getElementById("pcsObject4"),
      solObject: document.getElementById("solObject4"),
      saveObject: document.getElementById("saveObject4"),
    },
    card5: {
      cardBody: document.getElementById("cardDec5"),
      title: document.getElementById("cardTitle5"),
      percent: document.getElementById("percValue5"),
      pcs: document.getElementById("pcsValue5"),
      pcsDec: document.getElementById("pcsDec5"),
      compos: document.getElementById("compos5"),
      save: document.getElementById("save5"),
      percObject: document.getElementById("percObject5"),
      nameObject: document.getElementById("nameObject5"),
      pcsObject: document.getElementById("pcsObject5"),
      solObject: document.getElementById("solObject5"),
      saveObject: document.getElementById("saveObject5"),
    },
    card6: {
      cardBody: document.getElementById("cardDec6"),
      title: document.getElementById("cardTitle6"),
      percent: document.getElementById("percValue6"),
      pcs: document.getElementById("pcsValue6"),
      pcsDec: document.getElementById("pcsDec6"),
      compos: document.getElementById("compos6"),
      save: document.getElementById("save6"),
      percObject: document.getElementById("percObject6"),
      nameObject: document.getElementById("nameObject6"),
      pcsObject: document.getElementById("pcsObject6"),
      solObject: document.getElementById("solObject6"),
      saveObject: document.getElementById("saveObject6"),
    },
  };

  trash.sort(function (a, b) {
    return b - a;
  });

  for (var i = 0; i <= sigmaData - 1; i++) {
    console.log(i);
    cards["card" + (i + 1)].cardBody.classList.remove("hidden");
    cards["card" + (i + 1)].cardBody.classList.add("flex");
    cards["card" + (i + 1)].title.innerHTML = sortedObjects[i];
    cards["card" + (i + 1)].pcs.innerHTML = trash[i];
    cards["card" + (i + 1)].percent.innerHTML = sortedValues[i];
    cards["card" + (i + 1)].pcsDec.innerHTML = trash[i];
    cards["card" + (i + 1)].compos.innerHTML = trashCompos(trash[i]);
    cards["card" + (i + 1)].save.innerHTML = (trash[i] / 12).toFixed(0);
    cards["card" + (i + 1)].nameObject.innerHTML = sortedObjects[i];
    cards["card" + (i + 1)].pcsObject.innerHTML = trash[i];
    cards["card" + (i + 1)].percObject.innerHTML = sortedValues[i];
    cards["card" + (i + 1)].solObject.innerHTML = sortedObjects[i];
    cards["card" + (i + 1)].saveObject.innerHTML = (trash[i] / 12).toFixed(0);
  }
}

// funsi cek data input
function checkData(cardId) {
  var card = document.getElementById(cardId);
  card.classList.add("flex");
  card.classList.remove("hidden");
}

// fungsi switch output
var cond = true;
function swit(perc, pcs) {
  var percentMode = document.getElementById(perc);
  var pcsMode = document.getElementById(pcs);

  cond = !cond;
  console.log(cond);

  if (cond) {
    percentMode.classList.remove("flex");
    percentMode.classList.add("hidden");
    pcsMode.classList.add("flex");
    pcsMode.classList.remove("hidden");
  } else {
    pcsMode.classList.remove("flex");
    pcsMode.classList.add("hidden");
    percentMode.classList.remove("hidden");
    percentMode.classList.add("flex");
  }
}

// | quiz function |

//getOpsi
var jawabanA = "";
var jawabanB = "";
var jawabanC = "";
var jawabanD = "";
var jawabanE = "";
var skor = 0;
var salah = 0;
var benar = 0;

function getOpsi1(a, b) {
  const radios = document.getElementsByName("opsi");
  const step = document.getElementById("step1");
  const close = document.getElementById(a);
  const next = document.getElementById(b);
  let selectedValue = "";
  for (const radio of radios) {
    if (radio.checked) {
      selectedValue = radio.value;
      break;
    }
  }
  if (selectedValue) {
    step.classList.add("step-success");
    next.classList.add("block");
    next.classList.remove("hidden");
    close.classList.remove("block");
    close.classList.add("hidden");
    jawabanA = selectedValue;
    console.log(jawabanA);
  }
}
function getOpsi2(a, b) {
  const radios = document.getElementsByName("opsi");
  const step = document.getElementById("step2");
  const close = document.getElementById(a);
  const next = document.getElementById(b);
  let selectedValue = "";
  for (const radio of radios) {
    if (radio.checked) {
      selectedValue = radio.value;
      break;
    }
  }
  if (selectedValue) {
    step.classList.add("step-success");
    next.classList.remove("hidden");
    close.classList.remove("block");
    close.classList.add("hidden");
    jawabanB = selectedValue;
    console.log(jawabanB);
  }
}
function getOpsi3(a, b) {
  const radios = document.getElementsByName("opsi");
  const step = document.getElementById("step3");
  const close = document.getElementById(a);
  const next = document.getElementById(b);
  let selectedValue = "";
  for (const radio of radios) {
    if (radio.checked) {
      selectedValue = radio.value;
      break;
    }
  }
  if (selectedValue) {
    step.classList.add("step-success");
    next.classList.add("block");
    next.classList.remove("hidden");
    close.classList.remove("block");
    close.classList.add("hidden");
    jawabanC = selectedValue;
    console.log(jawabanC);
  }
}
function getOpsi4(a, b) {
  const radios = document.getElementsByName("opsi");
  const step = document.getElementById("step4");
  const close = document.getElementById(a);
  const next = document.getElementById(b);
  let selectedValue = "";
  for (const radio of radios) {
    if (radio.checked) {
      selectedValue = radio.value;
      break;
    }
  }
  if (selectedValue) {
    step.classList.add("step-success");
    next.classList.add("block");
    next.classList.remove("hidden");
    close.classList.remove("block");
    close.classList.add("hidden");
    jawabanD = selectedValue;
    console.log(jawabanD);
  }
}
function getOpsi5(a, b) {
  const radios = document.getElementsByName("opsi");
  const step = document.getElementById("step5");
  const close = document.getElementById(a);
  const next = document.getElementById(b);
  let selectedValue = "";
  for (const radio of radios) {
    if (radio.checked) {
      selectedValue = radio.value;
      break;
    }
  }
  if (selectedValue) {
    step.classList.add("step-success");
    next.classList.add("block");
    next.classList.remove("hidden");
    close.classList.remove("block");
    close.classList.add("hidden");
    jawabanE = selectedValue;
    console.log(jawabanE);
  }
}

function cekSkor() {
  skor = 0;
  salah = 0;
  benar = 0;
  console.log(jawabanA);
  console.log(jawabanB);
  console.log(jawabanC);
  console.log(jawabanD);
  console.log(jawabanE);
  var quizSec = document.getElementById("quizSec");
  var skorSec = document.getElementById("skorSec");
  var skorOut = document.getElementById("skorOut");
  var skorBenar = document.getElementById("skorBenar");
  var skorSalah = document.getElementById("skorSalah");
  var penilaian = document.getElementById("penilaian");

  quizSec.classList.add("hidden");
  quizSec.classList.remove("flex");
  skorSec.classList.remove("hidden");
  skorSec.classList.add("flex");

  if (jawabanA == "b") {
    skor += 20;
    benar += 1;
  } else {
    skor += 0;
    salah += 1;
  }

  if (jawabanB == "b") {
    skor += 20;
    benar += 1;
  } else {
    skor += 0;
    salah += 1;
  }

  if (jawabanC == "b") {
    skor += 20;
    benar += 1;
  } else {
    skor += 0;
    salah += 1;
  }

  if (jawabanD == "c") {
    skor += 20;
    benar += 1;
  } else {
    skor += 0;
    salah += 1;
  }

  if (jawabanE == "c") {
    skor += 20;
    benar += 1;
  } else {
    skor += 0;
    salah += 1;
  }

  createDonut(benar, salah);
  if (skor == 100) {
    penilaian.innerHTML =
      "Wow! Skor Anda sangat tinggi, dan itu menunjukkan pengetahuan yang kuat tentang perlindungan laut dari sampah plastik. Anda jelas sudah peduli dan sadar akan dampak negatifnya. Teruskan semangat Anda dalam mendukung upaya pelestarian laut kita!.";
  } else if (skor <= 80 && skor >= 60) {
    penilaian.innerHTML =
      "Hebat! Anda memiliki pengetahuan yang cukup baik tentang masalah sampah plastik di laut. Namun, masih ada ruang untuk pembelajaran lebih lanjut. Jangan ragu untuk menjelajahi lebih dalam topik ini untuk menjadi lebih sadar dan berkontribusi pada solusinya.";
  } else if (skor < 60) {
    penilaian.innerHTML =
      "Terima kasih telah berpartisipasi dalam quiz kami! Jika Anda mendapat skor rendah, jangan khawatir. Ini adalah kesempatan bagus untuk belajar lebih banyak tentang masalah sampah plastik di laut dan bagaimana Anda dapat membantu mengatasi masalah ini.";
  }
  skorOut.innerHTML = skor;
  skorBenar.innerHTML = benar;
  skorSalah.innerHTML = salah;
}

function createDonut(a, b) {
  var xValues = ["benar", "salah"];
  var yValues = [a, b];
  var barColors = ["#86FF7C", "#FF7C7C"];

  new Chart("resultChart", {
    type: "doughnut",
    data: {
      labels: xValues,
      datasets: [
        {
          backgroundColor: barColors,
          data: yValues,
        },
      ],
    },
    options: {
      title: {
        display: false,
      },
    },
  });
}

// | Simulation Function |

// sidebar
function side(btne, btnd, sece, secd) {
  var btnEnable = document.getElementById(btne);
  var btnDisable = document.getElementById(btnd);
  var sectionEnable = document.getElementById(sece);
  var sectionDisable = document.getElementById(secd);

  btnEnable.classList.remove("bg-font");
  btnEnable.classList.add("bg-primary/25");

  btnDisable.classList.add("bg-font");
  btnDisable.classList.remove("bg-primary/25");

  sectionEnable.classList.remove("hidden");
  sectionDisable.classList.add("hidden");
}

// guide box
function openGuide() {
  const guideBox = document.getElementById("guide-box");
  guideBox.classList.remove("hidden");
  guideBox.classList.add("flex");
}

function closeGuide() {
  const guideBox = document.getElementById("guide-box");
  guideBox.classList.add("hidden");
  guideBox.classList.remove("flex");
}

//input value
var totalKerusakan = 0;
function getElement1(btn, value) {
  var elementSelect = document.getElementById("element-select");
  elementSelect.innerHTML += " (Sampah Pastik) ";
  var btnElement = document.getElementById(btn);
  btnElement.classList.remove("flex");
  btnElement.classList.add("hidden");
  sampah1 = parseInt(value);
  btnAct();
}
function getElement2(btn, value) {
  var elementSelect = document.getElementById("element-select");
  elementSelect.innerHTML += " (Overfishing) ";
  var btnElement = document.getElementById(btn);
  btnElement.classList.remove("flex");
  btnElement.classList.add("hidden");
  sampah2 = value;
  btnAct();
}
function getElement3(btn, value) {
  var elementSelect = document.getElementById("element-select");
  elementSelect.innerHTML += " (Limbah Toxic) ";
  var btnElement = document.getElementById(btn);
  btnElement.classList.remove("flex");
  btnElement.classList.add("hidden");
  sampah3 = value;
  btnAct();
}
function getElement4(btn, value) {
  var elementSelect = document.getElementById("element-select");
  elementSelect.innerHTML += " (Alga Berbahaya) ";
  var btnElement = document.getElementById(btn);
  btnElement.classList.remove("flex");
  btnElement.classList.add("hidden");
  sampah4 = value;
  btnAct();
}
function getElement5(btn, value) {
  var elementSelect = document.getElementById("element-select");
  elementSelect.innerHTML += " (Tumpahan Minyak) ";
  var btnElement = document.getElementById(btn);
  btnElement.classList.remove("flex");
  btnElement.classList.add("hidden");
  sampah5 = value;
  btnAct();
}
function getElement6(btn, value) {
  var elementSelect = document.getElementById("element-select");
  elementSelect.innerHTML += " (Keasaman Laut) ";
  var btnElement = document.getElementById(btn);
  btnElement.classList.remove("flex");
  btnElement.classList.add("hidden");
  sampah6 = value;
  btnAct();
}

// get populasi
var population = 0;
function getPopulation() {
  var popilasiAwal = document.getElementById("populasi-awal");
  var populasiAkhir = document.getElementById("populasi-akhir");
  var populasiIkan = document.getElementById("populasi-ikan").value;
  var inputPopu = document.getElementById("input-popu");
  var popMin = document.getElementById("pop-min");
  var control = document.getElementById("dash-control");
  var fish = document.getElementById("sea-fish");
  console.log(populasiIkan);
  if (populasiIkan >= 50) {
    population = populasiIkan;
    popilasiAwal.innerHTML = populasiIkan + " Ikan";
    populasiAkhir.innerHTML = populasiIkan + " Ikan";
    inputPopu.classList.add("hidden");
    control.classList.remove("hidden");
    fish.classList.remove("hidden");
  } else if (populasiIkan < 50) {
    popMin.classList.remove("hidden");
    popMin.classList.add("block");
  }
}

function sumElement() {
  var sigmaElemem;
  var sea = document.getElementById("sea");
  var fish = document.getElementById("sea-fish");
  var fl1 = document.getElementById("fl1");
  var fl2 = document.getElementById("fl2");
  var fl3 = document.getElementById("fl3");
  var fl4 = document.getElementById("fl4");
  var fr2 = document.getElementById("fr2");
  var jel1 = document.getElementById("jel1");
  var jel2 = document.getElementById("jel2");
  var desPercent = document.getElementById("des-percent");
  var seaCon = document.getElementById("condition-sea");
  var seaDes = document.getElementById("description-sea");
  var seaIndi = document.getElementById("indicator-sea");

  sea.classList.remove("bg-normal");
  sea.classList.remove("bg-rendah");
  sea.classList.remove("bg-sedang");
  sea.classList.remove("bg-signifikan");
  sea.classList.remove("bg-moderat");
  sea.classList.remove("bg-serius");
  sea.classList.remove("bg-kritis");
  sea.classList.remove("bg-total");

  seaIndi.classList.remove("bg-normal");
  seaIndi.classList.remove("bg-rendah");
  seaIndi.classList.remove("bg-sedang");
  seaIndi.classList.remove("bg-signifikan");
  seaIndi.classList.remove("bg-moderat");
  seaIndi.classList.remove("bg-serius");
  seaIndi.classList.remove("bg-kritis");
  seaIndi.classList.remove("bg-total");
  sigmaElemem = sampah1 + sampah2 + sampah3 + sampah4 + sampah5 + sampah6;
  console.log(sigmaElemem);
  if (sigmaElemem >= 5) {
    sea.classList.add("bg-rendah");
    sea.classList.remove("bg-signifikan");
    sea.classList.remove("bg-moderat");
    sea.classList.remove("bg-serius");
    sea.classList.remove("bg-kritis");
    sea.classList.remove("bg-total");
    fish.classList.add("opacity-50");

    seaIndi.classList.add("bg-rendah");
    seaIndi.classList.remove("bg-signifikan");
    seaIndi.classList.remove("bg-moderat");
    seaIndi.classList.remove("bg-serius");
    seaIndi.classList.remove("bg-kritis");
    seaIndi.classList.remove("bg-total");
    seaCon.innerHTML = "Kerusakan Rendah";
    seaDes.innerHTML =
      "Ada sedikit tanda-tanda polusi tetapi belum menyebabkan kerusakan signifikan. Ekosistem masih berfungsi dengan baik, namun perlu perhatian untuk mencegah kerusakan lebih lanjut.";
  }
  if (sigmaElemem >= 30) {
    sea.classList.add("bg-sedang");
    sea.classList.remove("bg-rendah");
    sea.classList.remove("bg-signifikan");
    sea.classList.remove("bg-moderat");
    sea.classList.remove("bg-serius");
    sea.classList.remove("bg-kritis");
    sea.classList.remove("bg-total");

    seaIndi.classList.add("bg-sedang");
    seaIndi.classList.remove("bg-rendah");
    seaIndi.classList.remove("bg-signifikan");
    seaIndi.classList.remove("bg-moderat");
    seaIndi.classList.remove("bg-serius");
    seaIndi.classList.remove("bg-kritis");
    seaIndi.classList.remove("bg-total");
    seaCon.innerHTML = "Kerusakan Sedang";
    seaDes.innerHTML =
      "Polusi  terlihat lebih jelas, mengganggu beberapa spesies laut. Beberapa area mungkin menunjukkan tanda-tanda awal. Keseimbangan ekosistem mulai terganggu, meskipun sebagian besar masih dalam keadaan baik. ";

    fl1.classList.add("hidden");
    fl3.classList.add("hidden");
    fl4.classList.add("hidden");
  }
  if (sigmaElemem >= 50) {
    fr2.classList.add("hidden");
    sea.classList.add("bg-signifikan");
    sea.classList.remove("bg-rendah");
    sea.classList.remove("bg-sedang");
    sea.classList.remove("bg-moderat");
    sea.classList.remove("bg-serius");
    sea.classList.remove("bg-kritis");
    sea.classList.remove("bg-total");

    seaIndi.classList.add("bg-signifikan");
    seaIndi.classList.remove("bg-rendah");
    seaIndi.classList.remove("bg-sedang");
    seaIndi.classList.remove("bg-moderat");
    seaIndi.classList.remove("bg-serius");
    seaIndi.classList.remove("bg-kritis");
    seaIndi.classList.remove("bg-total");
    seaCon.innerHTML = "Kerusakan Signifikan";
    seaDes.innerHTML =
      "Kontaminasi lebih jelas terlihat, dan beberapa populasi ikan mulai menurun akibatnya. Peningkatan polusi mulai mempengaruhi kualitas air dan kesehatan organisme laut. Langkah-langkah konservasi diperlukan untuk mencegah kerusakan lebih lanjut";
  }
  if (sigmaElemem >= 70) {
    jel2.classList.add("hidden");
    sea.classList.add("bg-moderat");
    sea.classList.remove("bg-serius");
    sea.classList.remove("bg-kritis");
    sea.classList.remove("bg-total");
    sea.classList.remove("bg-rendah");
    sea.classList.remove("bg-sedang");
    sea.classList.remove("bg-signifikan");

    seaIndi.classList.add("bg-moderat");
    seaIndi.classList.remove("bg-serius");
    seaIndi.classList.remove("bg-kritis");
    seaIndi.classList.remove("bg-total");
    seaIndi.classList.remove("bg-rendah");
    seaIndi.classList.remove("bg-sedang");
    seaIndi.classList.remove("bg-signifikan");
    seaCon.innerHTML = "Kerusakan Moderat";
    seaDes.innerHTML =
      "Ekosistem laut berada di bawah tekanan besar dengan penurunan populasi ikan dan peningkatan polusi yang signifikan.  Langkah-langkah konservasi yang intensif diperlukan untuk memperbaiki keadaan.";
  }
  if (sigmaElemem >= 80) {
    fl2.classList.add("hidden");

    sea.classList.add("bg-serius");
    sea.classList.remove("bg-kritis");
    sea.classList.remove("bg-total");
    sea.classList.remove("bg-rendah");
    sea.classList.remove("bg-sedang");
    sea.classList.remove("bg-signifikan");
    sea.classList.remove("bg-moderat");

    seaIndi.classList.add("bg-serius");
    seaIndi.classList.remove("bg-kritis");
    seaIndi.classList.remove("bg-total");
    seaIndi.classList.remove("bg-rendah");
    seaIndi.classList.remove("bg-sedang");
    seaIndi.classList.remove("bg-signifikan");
    seaIndi.classList.remove("bg-moderat");
    seaCon.innerHTML = "Kerusakan Serius";
    seaDes.innerHTML =
      "Kerusakan akibat polusi berbahaya semakin parah. Banyak spesies berada dalam bahaya. Kesehatan ekosistem laut secara keseluruhan menurun drastis, dan pemulihan menjadi lebih sulit.";
  }
  if (sigmaElemem >= 90) {
    sea.classList.add("bg-kritis");
    sea.classList.remove("bg-total");
    sea.classList.remove("bg-rendah");
    sea.classList.remove("bg-sedang");
    sea.classList.remove("bg-signifikan");
    sea.classList.remove("bg-moderat");
    sea.classList.remove("bg-serius");

    seaIndi.classList.add("bg-kritis");
    seaIndi.classList.remove("bg-total");
    seaIndi.classList.remove("bg-rendah");
    seaIndi.classList.remove("bg-sedang");
    seaIndi.classList.remove("bg-signifikan");
    seaIndi.classList.remove("bg-moderat");
    seaIndi.classList.remove("bg-serius");
    seaCon.innerHTML = "Kerusakan Kritis";
    seaDes.innerHTML =
      "Ekosistem laut hampir sepenuhnya hancur dengan populasi ikan yang sangat rendah dan keanekaragaman hayati yang minimal";
  }
  if (sigmaElemem == 100) {
    jel1.classList.add("hidden");
    sea.classList.add("bg-total");
    sea.classList.remove("bg-rendah");
    sea.classList.remove("bg-sedang");
    sea.classList.remove("bg-signifikan");
    sea.classList.remove("bg-moderat");
    sea.classList.remove("bg-serius");
    sea.classList.remove("bg-kritis");

    seaIndi.classList.add("bg-total");
    seaIndi.classList.remove("bg-rendah");
    seaIndi.classList.remove("bg-sedang");
    seaIndi.classList.remove("bg-signifikan");
    seaIndi.classList.remove("bg-moderat");
    seaIndi.classList.remove("bg-serius");
    seaIndi.classList.remove("bg-kritis");
    seaCon.innerHTML = "Kerusakan Total";
    seaDes.innerHTML =
      "Laut berada di ambang kehancuran total. Polusi dan kontaminasi  membuat sebagian besar area laut tidak dapat mendukung kehidupan. Ekosistem hampir sepenuhnya runtuh, dan pemulihan alamiah sangat tidak mungkin.";
  }

  var percentPopul = map(population, 0, population, 0, 100);
  var percentTot = percentPopul - sigmaElemem;
  var originalPopulation = (percentTot / 100) * population;
  var populasiAkhir = document.getElementById("populasi-akhir");
  desPercent.innerHTML = sigmaElemem + "%";
  console.log(percentTot);
  populasiAkhir.innerHTML = originalPopulation + " Ikan";
  console.log(originalPopulation);

  var applyBtn = document.getElementById("apply");
  applyBtn.classList.remove("block");
  applyBtn.classList.add("hidden");
  applyBtn.classList.add("pointer-events-none");
}

function resetElement() {
  var fl1 = document.getElementById("fl1");
  var fl2 = document.getElementById("fl2");
  var fl3 = document.getElementById("fl3");
  var fl4 = document.getElementById("fl4");
  var fr2 = document.getElementById("fr2");
  var jel1 = document.getElementById("jel1");
  var jel2 = document.getElementById("jel2");

  fl1.classList.remove("hidden");
  fl2.classList.remove("hidden");
  fl3.classList.remove("hidden");
  fl4.classList.remove("hidden");
  fr2.classList.remove("hidden");
  jel1.classList.remove("hidden");
  jel2.classList.remove("hidden");

  sea.classList.add("bg-normal");
  sea.classList.remove("bg-rendah");
  sea.classList.remove("bg-sedang");
  sea.classList.remove("bg-signifikan");
  sea.classList.remove("bg-moderat");
  sea.classList.remove("bg-serius");
  sea.classList.remove("bg-kritis");
  sea.classList.remove("bg-total");

  var seaCon = document.getElementById("condition-sea");
  var seaDes = document.getElementById("description-sea");
  var seaIndi = document.getElementById("indicator-sea");
  seaCon.innerHTML = "Laut Sehat";
  seaDes.innerHTML =
    "Ekosistem laut dalam kondisi optimal dengan air yang jernih, keanekaragaman hayati yang tinggi, dan populasi organisme laut yang seimbang. Tidak ada tanda-tanda polusi atau kerusakan ekosistem. Ini adalah kondisi ideal yang menjadi tujuan konservasi laut.";
  seaIndi.classList.add("bg-normal");
  seaIndi.classList.remove("bg-rendah");
  seaIndi.classList.remove("bg-sedang");
  seaIndi.classList.remove("bg-signifikan");
  seaIndi.classList.remove("bg-moderat");
  seaIndi.classList.remove("bg-serius");
  seaIndi.classList.remove("bg-kritis");
  seaIndi.classList.remove("bg-total");

  var resetBtn = document.getElementById("reset");
  var applyBtn = document.getElementById("apply");
  resetBtn.classList.remove("block");
  applyBtn.classList.remove("block");
  applyBtn.classList.add("hidden");
  resetBtn.classList.add("hidden");
  applyBtn.classList.add("pointer-events-none");
  resetBtn.classList.add("pointer-events-none");

  var elementSelect = document.getElementById("element-select");
  elementSelect.innerHTML = "";

  var btn1 = document.getElementById("btn-plastik");
  var btn2 = document.getElementById("btn-overfishing");
  var btn3 = document.getElementById("btn-limbah");
  var btn4 = document.getElementById("btn-alga");
  var btn5 = document.getElementById("btn-minyak");
  var btn6 = document.getElementById("btn-keasaman");
  btn1.classList.add("flex");
  btn1.classList.remove("hidden");
  btn2.classList.add("flex");
  btn2.classList.remove("hidden");
  btn3.classList.add("flex");
  btn3.classList.remove("hidden");
  btn4.classList.add("flex");
  btn4.classList.remove("hidden");
  btn5.classList.add("flex");
  btn5.classList.remove("hidden");
  btn6.classList.add("flex");
  btn6.classList.remove("hidden");

  sampah1 = 0;
  sampah2 = 0;
  sampah3 = 0;
  sampah4 = 0;
  sampah5 = 0;
  sampah6 = 0;

  var populasiAkhir = document.getElementById("populasi-akhir");
  var desPercent = document.getElementById("des-percent");
  desPercent.innerHTML = "0%";
  populasiAkhir.innerHTML = population + " Ikan";
}

function btnAct() {
  var resetBtn = document.getElementById("reset");
  var applyBtn = document.getElementById("apply");
  applyBtn.classList.add("block");
  resetBtn.classList.add("block");
  applyBtn.classList.remove("hidden");
  resetBtn.classList.remove("hidden");
  applyBtn.classList.remove("pointer-events-none");
  resetBtn.classList.remove("pointer-events-none");
}

// | Contact Function |
const scriptURL =
  "https://script.google.com/macros/s/AKfycbz81ZrLbIRgjQgJGbeVFqfMLweLOh3ek9fYzywMymXgbtWbXyZGBVHD6i_ycRCRbjL2/exec";
const form = document.forms["oceanica-contact-form"];
const btnContact = document.getElementById("submit-btn");
const textBtn = document.getElementById("text-btn");
const succesBtn = document.getElementById("succes-btn");
const errorBtn = document.getElementById("error-btn");
const loadingBtn = document.getElementById("loading-btn");
const nullValue = document.getElementById("null-value");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nama = document.getElementById("nama").value.trim();
  const email = document.getElementById("email").value.trim();
  const pesan = document.getElementById("pesan").value.trim();
  if (nama == "" || email == "" || pesan == "") {
    nullValue.classList.toggle("hidden");
    console.log(nama);
  } else {
    btnContact.classList.toggle("hidden");
    loadingBtn.classList.toggle("hidden");
    loadingBtn.classList.toggle("flex");
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => {
        console.log("Success!", response);
        btnContact.classList.toggle("hidden");
        loadingBtn.classList.toggle("hidden");
        loadingBtn.classList.toggle("flex");
        succesBtn.classList.toggle("hidden");
        form.reset();
      })
      .catch((error) => {
        errorBtn.classList.toggle("hidden");
        console.error("Error!", error.message);
      });
  }
});
