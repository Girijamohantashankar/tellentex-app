import React from "react";
import "../../styles/Landing.css";
import image1 from "../../images/banner-01.png";
import image2 from "../../images/cash-prize.png";
import images3 from "../../images/csi.jpg";
import images4 from "../../images/medal.jpg";
import images5 from "../../images/sps.jpg";
import images6 from "../../images/acronym-allen.jpg";
import images7 from "../../images/acronym-allen1.jpg";
const LandingPage = () => {
  return (
    <section className="main_section">
      <div className="heading_text">
        <div className="heading_content_text">
          <p className="para">---- #SUCCESSKAASSURANCE</p>
          <h1 className="main_text">
            India’s <br />
            Biggest Talent <br />
            Encouragement Exam
          </h1>
          <h4 className="rank">
            TALLENTEX 2024 For Class V to X. <br />
            Get Rank, Recognition, Cash Prize, Scholarship & Much More.
          </h4>
          <p className="trusted_text">
            Trusted by almost a million students for self-analysis, <br />
            Academic Enhancement, Winning Rewards & Career Mapping
          </p>
          <button className="resgister_btn"><i class="fa-solid fa-user"></i> <span>Register Now</span></button>
        </div>

        <div className="image">
          <img src={image1} alt="" />
        </div>
      </div>
      <div className="about_content">
        <div className="card_conetnt">
          <div>
            <div className="card">
              <img src={image2} alt="" />
              <p>Cash Prizes</p>
              <h1>₹ 1 . 2 5 Cr.</h1>
            </div>
            <div className="card">
              <img src={image2} alt="" />
              <p>Cash Prizes</p>
              <h1>₹ 1 . 2 5 Cr.</h1>
            </div>
          </div>
          <div>
            <div className="card">
              <img src={image2} alt="" />
              <p>Cash Prizes</p>
              <h1>₹ 1 . 2 5 Cr.</h1>
            </div>
            <div className="card">
              <img src={image2} alt="" />
              <p>Cash Prizes</p>
              <h1>₹ 1 . 2 5 Cr.</h1>
            </div>
          </div>
        </div>
        <div className="card_conetnt_text">
          <h1>About TALLENTEX 2024</h1>
          <h5 className="exam_date">
            Exam Date : 29th October & 5th November 2023
          </h5>
          <p className="content_para">
            TALLENTEX helps students nurture their minds for higher targets of
            tomorrow and enables them to study at ALLEN Career Institute for
            competitive test preparation by allowing high admission scholarship.
            TALLENTEX has helped almost a million students build a solid
            foundation and made them future ready
          </p>
          <div className="exam_content">
            <i class="fa-solid fa-pen-to-square"></i>
            <div className="exam_content_text">
              <h1>Exam Conduction Process</h1>
              <p>TALLENTEX 2024 will be conducted in Offline mode only.</p>
            </div>
          </div>
          <div className="exam_content">
            <i class="fa-regular fa-calendar"></i>
            <div className="exam_content_text">
              <h1>Exam Result</h1>
              <p className="declear_para">
                Result will be declared in last week of November 2023 (It will
                be declared on www.tallentex.com and will also be shared by SMS
                at applicant's registered Mobile No.).
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="unique">
        <div className="unique_content">
          <div className="unique_image">
            <div>
              <img src={images3} alt="" />
              <img src={images4} alt="" />
            </div>
            <img src={images5} alt="" />
          </div>
          <div className="unique_text">
            <span>TALLENTEX 2024</span>
            <h1>Unique Benefits…</h1>
            <p className="textpara">
              Trusted by almost a million students for self-analysis, Academic
              Enhancement, <br /> Winning Rewards & Career Mapping.
            </p>
          </div>
        </div>
        <div className="unique_content_text_card">
          <div className="unique_content_text">
            <i class="fa-regular fa-star-half-stroke"></i>
            <div className="uni_text">
              <h3>National Rank & Performance</h3>
              <p>
                All the students participating in TALLENTEX 2024 will get their
                National Rank in their respective classes. Also, a detailed
                analysis of overall & subject wise performance will be provided
                in report format after the declaration of the result.
              </p>
            </div>
          </div>
          <div className="unique_content_text">
            <i class="fa-solid fa-chart-line"></i>
            <div className="uni_text">
              <h3>Competitive Success Index (CSI)</h3>
              <p>
                All the students participating in TALLENTEX will be provided
                with their Competitive Success Index (CSI). Based on CSI, a
                student can evaluate their potential for Success in respective
                forthcoming higher Competitive Exams including JEE (Main), JEE
                (Advanced), NEET (UG), International Olympiads, KVPY or NTSE.
              </p>
            </div>
          </div>
          <div className="unique_content_text">
            <i class="fa-solid fa-crown"></i>
            <div className="uni_text">
              <h3>Success Power Session (SPS)</h3>
              <p>
                Selected Students will be felicitated in Success Power Session
                at ALLEN Classroom Centers for which dates will be announced
                after the result. (subjected to prevailing Government
                Guidelines)
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="allens">
        <div className="left_image">
          <img src={images6} alt="" />
          <div className="pop_image">
            <img src={images7} alt="" />
          </div>
        </div>
        <div className="right_content">
          <span>KNOW ABOUT</span>
          <h1>
            ALLEN's Talent <br /> Encouragement Exam.
          </h1>
          <p>
            TALLENTEX is a specially designed initiative to encourage young
            talent with cash prizes, scholarships and mentoring by ALLEN Career
            Institute. As a career institute, we at ALLEN know that an
            encouragement platform not only provides an opportunity to students
            to apply their ability and win appreciation but also it nurtures
            their mind for higher targets of tomorrow.
          </p>
          <button className="resgister_btn">Know About Us</button>
        </div>
      </div>

      <div className="different">
        <span>W H Y</span>

        <h1>TALLENTEX is Different ? …</h1>

        <div className="teelentex_card">
          <div className="card_content">
            <div className="icon">
              <i class="fa-solid fa-explosion"></i>
            </div>
            <h2>Milestones</h2>
            <p>
              TALLENTEX is the beginning of lucrative milestones for young
              students from class V to X. It prepares them for achievement in
              successive milestones.
            </p>
          </div>
          <div className="card_content">
            <div className="icon">
              <i class="fa-solid fa-lock"></i>
            </div>
            <h2>Trust</h2>
            <p>
              ALLEN is India's Most Trusted & Result Dominating institute with a
              rich academic legacy since 1988. More than 28 Lac+ students have
              trusted ALLEN Classrooms in the last 35 years.
            </p>
          </div>
          <div className="card_content">
            <div className="icon">
              <i class="fa-solid fa-globe"></i>
            </div>
            <h2>Competitive Scenario</h2>
            <p>
              ALLEN’s hallmark SYSTEM of TESTING for students from India gives
              TALLENTEX the power to offer you the most realistic competition.
            </p>
          </div>
        </div>
      </div>
      <div className="accordion_content">
        <span>FAQ</span>
        <h1>Have Any Questions?</h1>
        <div class="accordion">
          <div class="accordion-item" id="question1">
            <a class="accordion-link" href="#question1">
              <div class="flex">
                <h3> What is TALLENTEX?</h3>
              </div>
              <i class="fa-solid fa-plus"></i>
            </a>
            <div class="answer">
              <p>
                {" "}
                TALLENTEX is the acronym for ALLEN's Talent Encouragement Exam.
                TALLENTEX is a specially designed initiative to encourage young
                talent with cash prizes, scholarships, and mentoring by ALLEN
                Career Institute.
              </p>
            </div>
            <hr />
          </div>
          <div class="accordion-item" id="question2">
            <a class="accordion-link" href="#question2">
              <div class="flex">
                <h3>Who can appear in TALLENTEX 2024?</h3>
              </div>
              <i class="fa-solid fa-plus"></i>
            </a>
            <div class="answer">
              <p>
                Students studying in classes V, VI, VII, VIII, IX, & X in
                2023-24 can appear in TALLENTEX 2024.
              </p>
            </div>
            <hr />
          </div>
          <div class="accordion-item" id="question3">
            <a class="accordion-link" href="#question3">
              <div class="flex">
                <h3>How and when will the exam be conducted?</h3>
              </div>
              <i class="fa-solid fa-plus"></i>
            </a>
            <div class="answer">
              <p>
                TALLENTEX Exam will be an offline test. The exam will be held on
                29th October and 5th November 2023.
                <br />* Zone-wise dates. Refer your zone to find date.
              </p>
            </div>
            <hr />
          </div>
          <div class="accordion-item" id="question3">
            <a class="accordion-link" href="#question3">
              <div class="flex">
                <h3>How and when will the exam be conducted?</h3>
              </div>
              <i class="fa-solid fa-plus"></i>
            </a>
            <div class="answer">
              <p>
                TALLENTEX Exam will be an offline test. The exam will be held on
                29th October and 5th November 2023.
                <br />* Zone-wise dates. Refer your zone to find date.
              </p>
            </div>
            <hr />
          </div>
          <div class="accordion-item" id="question3">
            <a class="accordion-link" href="#question3">
              <div class="flex">
                <h3>How and when will the exam be conducted?</h3>
              </div>
              <i class="fa-solid fa-plus"></i>
            </a>
            <div class="answer">
              <p>
                TALLENTEX Exam will be an offline test. The exam will be held on
                29th October and 5th November 2023.
                <br />* Zone-wise dates. Refer your zone to find date.
              </p>
            </div>
            <hr />
          </div>
          <div class="accordion-item" id="question3">
            <a class="accordion-link" href="#question3">
              <div class="flex">
                <h3>How and when will the exam be conducted?</h3>
              </div>
              <i class="fa-solid fa-plus"></i>
            </a>
            <div class="answer">
              <p>
                TALLENTEX Exam will be an offline test. The exam will be held on
                29th October and 5th November 2023.
                <br />* Zone-wise dates. Refer your zone to find date.
              </p>
            </div>
            <hr />
          </div>
          <div class="accordion-item" id="question3">
            <a class="accordion-link" href="#question3">
              <div class="flex">
                <h3>How and when will the exam be conducted?</h3>
              </div>
              <i class="fa-solid fa-plus"></i>
            </a>
            <div class="answer">
              <p>
                TALLENTEX Exam will be an offline test. The exam will be held on
                29th October and 5th November 2023.
                <br />* Zone-wise dates. Refer your zone to find date.
              </p>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
