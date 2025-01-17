import "./PersonalSkills.css";
import TypedText from "./TypedText";

const PersonalSkills = ({ personalSkills = [] }) => {
  return (
    <>
      {/* ======= Hero Section ======= */}
      {personalSkills && personalSkills.length > 0 && (
        <div
          id="personalSkills"
          className="personalSkills route bg-image"
          style={{ backgroundImage: "url(../assets/img/counters-bg.jpg)" }}
        >
          <div className="overlay-itro" />
          <div className="personalSkills-content display-table">
            <div className="table-cell">
              {/* {isAuthenticated && isAdminPage && (
                <div className="admin-actions d-flex justify-content-end align-items-start">
                  {personalSkills.map((personalSkill) => (
                    <div key={personalSkill._id}>
                      <button
                        className="admin-btn btn btn-primary btn-sm me-1"
                        aria-label="Edit"
                        onClick={() => onEditClick(personalSkill)}
                      >
                        <i className="bi bi-pencil" />
                      </button>
                      <button
                        className="admin-btn btn btn-danger btn-sm me-5"
                        aria-label="Delete"
                        onClick={() => handleDeleteClick(personalSkill._id)}
                      >
                        <i className="bi bi-trash" />
                      </button>
                    </div>
                  ))}
                </div>
              )} */}

              {personalSkills.map((personalSkill) => (
                <div className="container" key={personalSkill._id}>
                  <div>
                    <h1 className="personalSkills-title mb-4">
                      I am {personalSkill.name}
                    </h1>
                    <p className="personalSkills-subtitle">
                      {personalSkill.skills && (
                        <TypedText items={personalSkill.skills.split(",")} />
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {/* End Hero Section */}
    </>
  );
};

export default PersonalSkills;
