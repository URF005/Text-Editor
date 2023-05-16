import React from "react";

export default function About() {
  return (
    <div>
      <div className="accordion myclass mt-5" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Quaid-E-Azam
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Muhammad Ali Jinnah was a barrister, politician and the founder of
              Pakistan. Jinnah served as the leader of the All-India Muslim
              League from 1913 until the inception of Pakistan on 14 August
              1947, and then as the Dominion of Pakistan's first
              governor-general until his death
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Dr Mohammad Iqbal
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Sir Muhammad Iqbal was a South Asian Muslim writer, philosopher,
              scholar and politician, whose poetry in the Urdu language is
              considered among the greatest of the twentieth century, and whose
              vision of a cultural and political ideal for the Muslims of
              British-ruled India was to animate the impulse for Pakistan
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Imran Khan
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Imran Ahmed Khan Niazi HI PP is a Pakistani politician and former
              cricket captain who served as the 22nd Prime Minister of Pakistan
              from August 2018 until April 2022. He is the founder and chairman
              of the political party Pakistan
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
