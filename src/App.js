import React, { useState } from "react";

import { ExportCSV } from "./ExportCSV";

export default function App() {
  const [studentOne, setStudentOne] = useState("Absent");
  const [studentTwo, setStudentTwo] = useState("Absent");
  const [studentThree, setStudentThree] = useState("Absent");
  const [studentFour, setStudentFour] = useState("Absent");
  const [studentFive, setStudentFive] = useState("Absent");
  const [studentSix, setStudentSix] = useState("Absent");
  const [studentSeven, setStudentSeven] = useState("Absent");
  const [studentEight, setStudentEight] = useState("Absent");
  const [studentNine, setStudentNine] = useState("Absent");
  const [studentTen, setStudentTen] = useState("Absent");
  const [studentEleven, setStudentEleven] = useState("Absent");
  const [studentTwelve, setStudentTwelve] = useState("Absent");
  const [studentThirteen, setStudentThirteen] = useState("Absent");
  const [studentFourteen, setStudentFourteen] = useState("Absent");
  const [studentFifteen, setStudentFifteen] = useState("Absent");

  const fileName = "DMC_JU_Attendance";

  const details = [
    {
      roll: "002130501001",
      name: "Rohit Ghosal",
      email: "rohitghosal009@gmail.com",
      attendance: studentOne,
    },
    {
      roll: "002130501002",
      name: "Subhasree Mandal",
      email: "mandalsubhasree1998@gmail.com",
      attendance: studentTwo,
    },
    {
      roll: "002130501003",
      name: "Samriddha Roy",
      email: "tuyaroy50@gmail.com",
      attendance: studentThree,
    },
    {
      roll: "002130501004",
      name: "Shouvik Bajpayee",
      email: "shouvikbajpayee15@gmail.com",
      attendance: studentFour,
    },
    {
      roll: "002130501005",
      name: "Rabiul Islam",
      email: "irabiul912@gmail.com",
      attendance: studentFive,
    },
    {
      roll: "002130501006",
      name: "Niladri Sekhar Sarkar",
      email: "niladrisekharsarkar24@gmail.com",
      attendance: studentSix,
    },
    {
      roll: "002130501007",
      name: "Tuhin Sikdar",
      email: "tuhinsikdar1998@gmail.com",
      attendance: studentSeven,
    },
    {
      roll: "002130501008",
      name: "Jabed Akhtar",
      email: "jabzeeshan.1009@gmail.com",
      attendance: studentEight,
    },
    {
      roll: "002130501009",
      name: "Supriyo Malik",
      email: "supriyodata@gmail.com",
      attendance: studentNine,
    },
    {
      roll: "002130501010",
      name: "SK Hojayfa Rahaman",
      email: "hojayfa25@gmail.com",
      attendance: studentTen,
    },
    {
      roll: "002130501011",
      name: "Sanchita Maity",
      email: "sanchitamaity96@gmail.com",
      attendance: studentEleven,
    },
    {
      roll: "002130501012",
      name: "Vandita Kumari",
      email: "vanditakumari4321@gmail.com",
      attendance: studentTwelve,
    },
    {
      roll: "002130501013",
      name: "Paulami Nath",
      email: "pau.nath88@gmail.com",
      attendance: studentThirteen,
    },
    {
      roll: "002130501014",
      name: "Bishal Sarkar",
      email: "bishalsarkar84@yahoo.com",
      attendance: studentFourteen,
    },
    {
      roll: "002130501015",
      name: "Angana Beragupta",
      email: "anganabg@gmail.com",
      attendance: studentFifteen,
    },
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-3 col-sm-0"></div>
        <div className="col-lg-6 col-md-6 col-sm-0">
          <h2 align="center" style={{ color: "blueviolet" }}>
            DMC Attendance Sheet
            <br />
            Jadavpur University
          </h2>
          <br />
          <div>
            {details.map((detail, index) => {
              return (
                <div
                  className="card"
                  style={{
                    boxShadow: "0px 0px 20px -10px slategrey",
                    borderRadius: "10px",
                    marginBottom: "10px",
                  }}
                >
                  <div className="container card-body">
                    <p style={{ fontWeight: "bolder" }}>
                      Roll Number: {detail.roll}
                    </p>
                    <h5 style={{ fontWeight: "bolder" }}>{detail.name}</h5>
                    <p style={{ fontWeight: "bolder" }}>{detail.email}</p>
                    <p>Attendance</p>
                    <select
                      defaultValue="Absent"
                      className="form-select"
                      onChange={(e) => {
                        if (index === 0) {
                          setStudentOne(e.target.value);
                        } else if (index === 1) {
                          setStudentTwo(e.target.value);
                        } else if (index === 2) {
                          setStudentThree(e.target.value);
                        } else if (index === 3) {
                          setStudentFour(e.target.value);
                        } else if (index === 4) {
                          setStudentFive(e.target.value);
                        } else if (index === 5) {
                          setStudentSix(e.target.value);
                        } else if (index === 6) {
                          setStudentSeven(e.target.value);
                        } else if (index === 7) {
                          setStudentEight(e.target.value);
                        } else if (index === 8) {
                          setStudentNine(e.target.value);
                        } else if (index === 9) {
                          setStudentTen(e.target.value);
                        } else if (index === 10) {
                          setStudentEleven(e.target.value);
                        } else if (index === 11) {
                          setStudentTwelve(e.target.value);
                        } else if (index === 12) {
                          setStudentThirteen(e.target.value);
                        } else if (index === 13) {
                          setStudentFourteen(e.target.value);
                        } else if (index === 14) {
                          setStudentFifteen(e.target.value);
                        }
                      }}
                    >
                      <option value="Absent">Absent</option>
                      <option value="Present">Present</option>
                    </select>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-0"></div>
      </div>
      <br />
      <br />
      <div>
        <ExportCSV csvData={details} fileName={fileName} />
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
