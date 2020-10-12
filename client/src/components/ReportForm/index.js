import React, { Component } from "react";
import "./ReportForm.css";
import { FaImages } from "react-icons/fa";

export default class ReportForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // issueType: props.issueType,
      issueType: this.props.typeSelected,
      descValue: "",
      imageFiles: null,
      imagePreviewLinks: [],
    };
  }

  handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    let name = event.target.name;

    // Updating the input's state
    this.setState({ [name]: value });
  };

  handleImageLoad = (event) => {
    // Validate files are images...
    if (event.target.files.length > 3 || event.target.files.length <= 0) {
      alert("Please submit max of 3 images");
      return;
    }
    const files = Array.from(event.target.files);
    this.setState({ imageFiles: files });
    let _imagePreviewLinks = [];
    files.forEach((file) =>
      _imagePreviewLinks.push(window.URL.createObjectURL(file))
    );
    this.setState({ imagePreviewLinks: _imagePreviewLinks });
  };

  handleSubmitClick = (event) => {
    event.preventDefault();
    const { issueType, descValue, imageFiles } = this.state;
    const types = ["image/png", "image/jpeg", "image/gif"];
    let error = false;
    const errorMsg = [];

    // Need a Validation for
    // Validate all files submitted
    if (!issueType || !descValue || !imageFiles) {
      alert("1-3 images and Description is Required");
      return;
    }

    //add all database items to data object, then image files to form data
    //when passed above main will add more info to data and send two seperate request
    let data = {
      category: issueType,
      descr: descValue,
    };
    const formData = new FormData();
    imageFiles.forEach((file, index) => {
      if (types.every((type) => file.type !== type)) {
        errorMsg.push(`'${file.type}' is not a supported format`);
        error = true;
        return;
      }

      // #3 Catching files that are too large on the client
      if (file.size > 150000) {
        errorMsg.push(
          `'${file.name}' is too large, please pick a smaller file`
        );
        error = true;
        return;
      }

      formData.append(index, file);
    });

    //if no errors execute submitIssue from props, then set state to null
    if (!error) this.props.submitIssueReport(data, formData);
    else {
      errorMsg.map((msg) => alert(msg));
    }
    // reset state
    this.setState({
      issueType: "Structural",
      descValue: "",
      imageFiles: null,
      imagePreviewLinks: [],
    });
  };
  render() {
    const { imagePreviewLinks } = this.state;
    return (
      <form className="text-center  p-4">
        <p className="h4 mb-3 text-white">
          {`Report ${this.props.typeSelected} Issue`}
        </p>
        <div className="form-row">
          {imagePreviewLinks && (
            <>
              {imagePreviewLinks.map((imgSrc) => (
                <div class="col ">
                  <img
                    key={imgSrc}
                    className="img-fluid img-upload"
                    src={imgSrc}
                    alt="Test"
                  ></img>
                </div>
              ))}
            </>
          )}
          {imagePreviewLinks.length === 0 && (
            <p className="text-light">
              Add a brief description and upload images(3 max) for community to
              resolve!
            </p>
          )}
        </div>

        {/*  */}

        {/* <div className="md-form">
          <label for="input">Brief Description</label>
          <input type="text" id="input" class="form-control" placeholder="" />
        </div> */}
        <div className="form-row mb-2">
          <div className="col-10">
            <div className="md-form">
              <label for="input">Brief Description</label>
              <input
                type="text"
                id="input"
                class="form-control"
                placeholder=""
              />
            </div>
          </div>
          <div className="col-auto">
            <div className="md-form">
              <input
                className="image-input"
                type="file"
                id="multi"
                onChange={this.handleImageLoad}
                multiple
              />

              <div className="uploadBtnContainer">
                <label htmlFor="multi">
                  <FaImages className="upload-icon" />
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="row d-flex align-items-center mb-1">
          <div className="text-center mb-1 col-md-12">
            <button
              type="button"
              className="btn blue-gradient btn-block btn-rounded z-depth-1"
              onClick={this.handleSubmitClick}
            >
              Submit
            </button>
          </div>
        </div>

        {/*  */}
      </form>
    );
    {
      /* <form className="form">
{imagePreviewLinks && (
  <>
    {imagePreviewLinks.map((imgSrc) => (
      <img
        key={imgSrc}
        className="img-thumb"
        src={imgSrc}
        alt="Test"
      ></img>
    ))}
  </>
)}
<ul>
  <li className="headerReportFormContainer">
    <h3 className="bold">Report</h3>
  </li>

  <li>
    <input
      value={this.state.descValue}
      name="descValue"
      onChange={this.handleInputChange}
      type="text"
      placeholder="Description"
    />

    <input
      className="image-input"
      type="file"
      id="multi"
      onChange={this.handleImageLoad}
      multiple
    />

    <div className="uploadBtnContainer">
      <label htmlFor="multi">
        <FaImages className="upload-icon" />
      </label>
    </div>
  </li>

  <li className="reportFormBtnContainer">
    <button className="reportFormBtn" onClick={this.handleSubmitClick}>
      {" "}
      Submit
    </button>
  </li>
</ul>
</form> */
    }
  }
}
