import PropTypes from "prop-types";
export default function Card({ data }) {
  return (
    <>
      <div className="col-sm-6 col-md-6 col-lg-4 mb-4">
        <div className="card h-100">
          <img src={data.image} className="card-image-top" alt="card_img" />
          <div className="card-body">
            <a
              className="card-title hover-text text-dark fs-5 fw-semibold"
              href={data.link} target="_blank"
            >
              {data.title}
            </a>
            <p className="card-author mt-3 mb-0">
              <span id="by">By</span>&nbsp;<a className="text-decoration-none" id="authlink" href={data.authlink} target="_blank">{data.author}</a>
            </p>
            <div className="mt-2 d-flex flex-row flex-nowrap justify-content-between">
              <p className="mb-0 card-text">{data.date}</p>
              <p className="mb-0 card-text">{data.duration}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Card.propTypes = {
    data: PropTypes.object.isRequired,
};
