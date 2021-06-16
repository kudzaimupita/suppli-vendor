import React, { PureComponent } from "react";
import { createPlug, updatePlug } from "../actions/plugs";
import { getCatergories } from "../actions/catergories";
import { createProduct, getProduct } from "../actions/products";
import { connect } from "react-redux";
import { setAlert } from "../actions/alert";
import SignInModal from "../components/SignInModal";
import { useHistory, withRouter } from "react-router-dom";
import ReactQuill from "react-quill";
import { Upload, message } from "antd";
import RegisterModal from "../components/RegisterModal";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
// import Select from "../components/Select";
import Select from "react-select";
import TagsInput from "react-tagsinput";
import TagsCss from "../assets/css/bootstrap.css";
import "react-quill/dist/quill.snow.css";
import Dropzone from "dropzone";
import classnames from "classnames";
import ImgCrop from "antd-img-crop";

import {
	ListGroupItem,
	ListGroup,
	Button,
	Card,
	CardHeader,
	CardBody,
	InputGroup,
	InputGroupAddon,
	InputGroupText,
	FormGroup,
	Form,
	Input,
	Row,
	Col,
	Progress,
	Spinner,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownItem,
	DropdownMenu,
	Modal,
	Container,
} from "reactstrap";
Dropzone.autoDiscover = false;

function getBase64(file, callback) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.addEventListener("load", () => callback(reader.result));
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result);
		reader.onerror = (error) => reject(error);
	});
}

class PlugApplication extends React.Component {
	componentDidMount() {
		this.props.getCatergories();
	}
	toggleModal = (state) => {
		this.setState({
			[state]: !this.state[state],
		});
	};
	state = {
		tags: this.props.myPlug.plug ? this.props.myPlug.plug.tags : [],
		description: "",
		catergory: [],
		multipleSelect: [],
		displayName: "",
		name: "",
		instagramLink: "",
		facebookLink: "",
		twitterLink: "",
		country: "South Africa",
		city: "",
		postalCode: "",
		address: "",
		accountNumber: "",
		holderName: "",
		holderSurname: "",
		accountBranchCode: "",
		bankName: "",
		logo: "",
		filelist: [],
	};

	onChange = ({ fileList: newFileList }) => {
		this.setState({ filelist: newFileList });
	};

	handleCoverChange = (info, file) => {
		if (info.file.status === "uploading") {
			this.setState({ loading: true });
			return;
		}
		this.setState({ imageCover: info.file.originFileObj });
		// this.setState({imageCover:info.file.})
		if (info.file.status === "done") {
			// Get this url from response in real world.
			getBase64(info.file.originFileObj, (imageUrl) =>
				this.setState({
					imageUrl,
					loading: false,
				})
			);
		}
	};

	beforeUpload(file) {
		const isJpgOrPng =
			file.type === "image/jpeg" ||
			file.type === "image/png" ||
			file.type === "image/jpg";
		if (!isJpgOrPng) {
			message.error("You can only upload JPG/PNG/JPEG file!");
		}
		const isLt2M = file.size / 1024 / 1024 < 2;
		if (!isLt2M) {
			message.error("Image must smaller than 2MB!");
		}

		return isJpgOrPng && isLt2M;
	}
	handleSelectChange = (multipleSelect) => {
		this.setState({ multipleSelect });
		// this.setState({ subCatergory:multipleSelect.value });
	};

	handleColorsChange = (colors) => {
		this.setState({ colors });
	};
	handleImagesChange = (images) => {
		this.setState({ images });
	};

	handleTagsChange = (tags) => {
		this.setState({ tags });
	};
	handleSizesChange = (sizes) => {
		this.setState({ sizes });
	};
	handleNameChange = (e) => {
		this.setState({ name: e.target.value });
	};

	handleSeChange = (e) => {
		this.setState({ brandName: e.target.value });
	};

	handlePhoneChange = (e) => {
		this.setState({ phone: e.target.value });
	};

	handleEmailChange = (e) => {
		this.setState({ companyEmail: e.target.value });
	};

	handleTwitterChange = (e) => {
		this.setState({ twitterLink: e.target.value });
	};

	handleFacebookChange = (e) => {
		this.setState({ facebookLink: e.target.value });
	};

	handleInstagramChange = (e) => {
		this.setState({ instagramLink: e.target.value });
	};

	handleAddressChange = (e) => {
		this.setState({ address: e.target.value });
	};

	handleCityChange = (e) => {
		this.setState({ city: e.target.value });
	};

	handlePostalCodeChange = (e) => {
		this.setState({ postalCode: e.target.value });
	};

	handleSubCatergoryChange = (e) => {
		this.setState({ catergory: e.target.value });
	};
	// handleDescriptionChange = (e) => {
	//   this.setState({ description: e.target.value });
	// };
	handleReactQuillChange = (value) => {
		this.setState({
			reactQuillText: value,
		});
	};
	handleAboutUsChange = (e) => {
		this.setState({ aboutUs: e.target.value });
	};

	handleCoverImageChange = (e) => {
		this.setState({ imageCover: URL.createObjectURL(e.target.files[0]) });
	};

	onSubmit = async (e) => {
		const data = new FormData();
		const img = this.state.filelist[0]?.originFileObj;
		this.state.name && data.append("name", this.state.name);
		this.state.displayName &&
			data.append("displayName", this.state.displayName);
		this.state.companyEmail &&
			data.append("companyEmail", this.state.companyEmail);
		this.state.address && data.append("address", this.state.address);
		this.state.city && data.append("city", this.state.city);
		this.state.postalCode && data.append("postalCode", this.state.postalCode);
		this.state.country && data.append("country", this.state.country);
		this.state.holderName &&
			data.append(
				"bankAccountDetails.accountHolderName",
				this.state.holderName
			);
		this.state.holderName &&
			data.append(
				"bankAccountDetails.accountHolderSurname",
				this.state.holderSurname
			);
		this.state.accountNumber &&
			data.append("bankAccountDetails.accountNumber", this.state.accountNumber);
		this.state.brandCode &&
			data.append("bankAccountDetails.accountBranchCode", this.state.brandCode);
		this.state.bankName &&
			data.append("bankAccountDetails.bankName", this.state.bankName);
		this.state.phone && data.append("phone", this.state.phone);
		img && data.append("logo", img);
		this.state.instagramLink &&
			data.append("instagramLink", this.state.instagramLink);
		this.state.facebookLink &&
			data.append("facebookLink", this.state.facebookLink);
		this.state.twitterLink &&
			data.append("twitterLink", this.state.twitterLink);
		this.state.aboutUs && data.append("aboutUs", this.state.aboutUs);
		this.state.tags &&
			this.state.tags.map((item) => {
				data.append("tags", item);
			});

		this.state.multipleSelect &&
			this.state.multipleSelect.map((item) => {
				data.append("catergory", item.value);
			});

		this.props.updatePlug(data, this.props.history);
	};

	handlePreview = async (file) => {
		if (!file.url && !file.preview) {
			file.preview = await getBase64(file.originFileObj);
		}

		this.setState({
			previewImage: file.url || file.preview,
			previewVisible: true,
			previewTitle:
				file.name || file.url.substring(file.url.lastIndexOf("/") + 1),
			filelist: [],
		});
		this.setState({ filelist: [] });
	};

	buttonSpinner = (
		<Spinner
			size="sm"
			style={{ marginRight: 6 }}
			// type="grow"
			color="white"
		/>
	);

	render() {
		const {
			loading,
			imageUrl,
			previewVisible,
			previewImage,
			fileList,
			previewTitle,
		} = this.state;
		const uploadButton = (
			<div>
				{loading ? <LoadingOutlined /> : <PlusOutlined />}
				<div style={{ marginTop: 8 }}>Upload</div>
			</div>
		);
		const onPreview = async (file) => {
			let src = file.url;
			if (!src) {
				src = await new Promise((resolve) => {
					const reader = new FileReader();
					reader.readAsDataURL(file.originFileObj);
					reader.onload = () => resolve(reader.result);
				});
			}
			const image = new Image();
			image.src = src;
			const imgWindow = window.open(src);
			imgWindow.document.write(image.outerHTML);
		};
		console.log(this.state);
		return (
			<>
				<Card className="bg-white shadow" style={{ marginBottom: 20 }}>
					<CardHeader className="bg-secondary border-0">
						<Row className="align-items-center">
							<Col xs="8">
								<h3 className="mb-0">Settings</h3>
							</Col>
							{/* <Col className="text-right" xs="4">
								<Button
									color="primary"
									href="#pablo"
									onClick={(e) => e.preventDefault()}
									size="sm"
								>
									Help
								</Button>
							</Col> */}
						</Row>
					</CardHeader>
					<CardBody>
						<Form>
							<Row>
								<Col md="6">
									<FormGroup>
										<label
											className="labels"
											htmlFor="input-country"
											style={{ fontSize: "13px" }}
										>
											Store name<span className="text-danger"> *</span>
										</label>
										<Input
											className="form-control"
											size="sm"
											id="input-username"
											type="text"
											name="name"
											defaultValue={
												this.props.myPlug.plug && this.props.myPlug.plug.name
											}
											onChange={this.handleNameChange}
										/>
									</FormGroup>
								</Col>
								<Col lg="6">
									{/* <FormGroup>
                          <label
                     className="labels"
                     htmlFor="input-country"
                     style={{ fontSize: "13px" }}
                   >
                     Display name<span className="text-danger"> </span>
                   </label>
                      <Input
                        className="form-control"
                        id="input-email"
                        placeholder="eg Russell Hobbs"
                        type="text"
                    
                        name="brandName"
                        defaultValue={
                          this.props.myPlug.plug && this.props.myPlug.plug.name
                        }
                        onChange={this.handleBrandNameChange}
                      />
                    </FormGroup> */}
									<FormGroup>
										<label
											className="labels"
											htmlFor="input-country"
											style={{ fontSize: "13px" }}
										>
											Phone<span className="text-danger"> *</span>
										</label>
										<Input
											className="form-control"
											size="sm"
											id="input-first-name"
											placeholder="eg 2999"
											type="tel"
											name="phone"
											defaultValue={
												this.props.myPlug.plug && this.props.myPlug.plug.phone
											}
											onChange={this.handlePhoneChange}
										/>
									</FormGroup>
								</Col>
							</Row>

							<Row>
								<Col sm="12" md="6">
									<FormGroup>
										<label
											className="labels"
											htmlFor="input-country"
											style={{ fontSize: "13px" }}
										>
											Shop email<span className="text-danger"> *</span>
										</label>
										<Input
											className="form-control"
											size="sm"
											type="email"
											name="email"
											// value={this.state.quantityInStock}
											onChange={this.handleEmailChange}
											defaultValue={
												this.props.myPlug.plug &&
												this.props.myPlug.plug.companyEmail
											}
										/>
									</FormGroup>
								</Col>
								{/* <Col sm="12" lg="6" md="6">
									<FormGroup>
										<label
											className="labels"
											htmlFor="input-country"
											style={{ fontSize: "13px" }}
										>
											Catergories<span className="text-danger"> *</span>
										</label>
										<Select
											className="react-select react-select-info"
											classNamePrefix="react-select"
											placeholder="Select"
											name="multipleSelect"
											// closeMenuOnSelect={false}
											isMulti
											defaultValue={
												this.props.myPlug.plug &&
												this.props.myPlug.plug.catergory.map((catergory) => ({
													value: catergory._id,
													label: catergory.name,
												}))
											}
											onChange={this.handleSelectChange}
											options={
												this.props.catergories &&
												this.props.catergories.map((catergory) => ({
													value: catergory._id.toString(),
													label: catergory.name.toString(),
												}))
											}
										/>
									</FormGroup>
								</Col> */}
							</Row>
							<Row>
								<Col md="12">
									<FormGroup>
										<label
											className="labels"
											htmlFor="input-country"
											style={{ fontSize: "13px" }}
										>
											About us<span className="text-danger"> *</span>
										</label>
										<Input
											style={{ height: "120px" }}
											className="form-control"
											rows="4"
											defaultValue={
												this.props.myPlug.plug && this.props.myPlug.plug.aboutUs
											}
											type="textarea"
											name="aboutUs"
											// value={this.state.description}
											onChange={this.handleAboutUsChange}
										/>
										{/* <ReactQuill
                        onChange={this.handleReactQuillChange}
                        defaultValue={
                          this.props.myPlug.plug &&
                          this.props.myPlug.plug.description
                        }
                        theme="snow"
                        modules={{
                          toolbar: [
                            // ["bold", "italic"],
                            // ["link", "blockquote"],
                            [
                              {
                                list: "ordered",
                              },
                              {
                                list: "bullet",
                              },
                            ],
                          ],
                        }}
                      /> */}
									</FormGroup>
								</Col>{" "}
								<Col md="4">
									<FormGroup>
										<label
											className="labels"
											htmlFor="input-country"
											style={{ fontSize: "13px" }}
										>
											Facebook handle<span className="text-danger"> </span>
										</label>

										<InputGroup
											className={classnames({
												focused:
													this.state.default && this.state.default.username,
											})}
										>
											{/* <InputGroupAddon addonType="prepend">
												<InputGroupText>@</InputGroupText>
											</InputGroupAddon> */}
											<Input
												className="form-control"
												size="sm"
												id="input-username"
												type="text"
												name="facebook"
												defaultValue={
													this.props.myPlug.plug &&
													this.props.myPlug.plug.facebookLink
												}
												onChange={this.handleFacebookChange}
											/>
										</InputGroup>
									</FormGroup>
								</Col>
								<Col md="4">
									<FormGroup>
										<label
											className="labels"
											htmlFor="input-country"
											style={{ fontSize: "13px" }}
										>
											Twitter handle<span className="text-danger"> </span>
										</label>

										<InputGroup
											className={classnames({
												focused:
													this.state.default && this.state.default.username,
											})}
										>
											{/* <InputGroupAddon addonType="prepend">
												<InputGroupText>@</InputGroupText>
											</InputGroupAddon> */}
											<Input
												className="form-control"
												size="sm"
												id="input-username"
												type="text"
												name="twitter"
												defaultValue={
													this.props.myPlug.plug &&
													this.props.myPlug.plug.twitterLink
												}
												onChange={this.handleTwitterChange}
											/>
										</InputGroup>
									</FormGroup>
								</Col>
								<Col md="4">
									<FormGroup>
										<label
											className="labels"
											htmlFor="input-country"
											style={{ fontSize: "13px" }}
										>
											Instagram handle<span className="text-danger"> </span>
										</label>

										<InputGroup
											className={classnames({
												focused:
													this.state.default && this.state.default.username,
											})}
										>
											{/* <InputGroupAddon size="sm" addonType="prepend">
												<InputGroupText size="sm">@</InputGroupText>
											</InputGroupAddon> */}
											<Input
												className="form-control"
												size="sm"
												id="input-username"
												type="text"
												name="name"
												defaultValue={
													this.props.myPlug.plug &&
													this.props.myPlug.plug.instagramLink
												}
												onChange={this.handleInstagramChange}
											/>
										</InputGroup>
									</FormGroup>
								</Col>
							</Row>
							<Row>
								<Col md="12">
									<FormGroup>
										<label
											className="labels"
											htmlFor="input-country"
											style={{ fontSize: "13px" }}
										>
											Address<span className="text-danger"> *</span>
										</label>
										<Input
											className="form-control"
											size="sm"
											id="input-address"
											type="text"
											name="address"
											defaultValue={
												this.props.myPlug.plug && this.props.myPlug.plug.address
													? this.props.myPlug.plug.address
													: null
											}
											onChange={this.handleAddressChange}
										/>
									</FormGroup>
								</Col>
							</Row>
							<Row>
								<Col lg="4">
									<FormGroup>
										<label
											className="labels"
											htmlFor="input-country"
											style={{ fontSize: "13px" }}
										>
											City<span className="text-danger"> *</span>
										</label>
										<Input
											className="form-control"
											size="sm"
											id="input-city"
											type="text"
											name="city"
											defaultValue={
												this.props.myPlug.plug && this.props.myPlug.plug.city
													? this.props.myPlug.plug.city
													: null
											}
											onChange={this.handleCityChange}
										/>
									</FormGroup>
								</Col>
								<Col lg="4">
									<FormGroup>
										<label
											className="labels"
											htmlFor="input-country"
											style={{ fontSize: "13px" }}
										>
											Country<span className="text-danger"> *</span>
										</label>
										<Input
											className="form-control"
											size="sm"
											defaultValue="South Africa"
											id="input-country"
											placeholder="South Africa"
											type="text"
											disabled
											name="country"
											defaultValue={
												this.props.myPlug.plug && this.props.myPlug.plug.country
													? this.props.myPlug.plug.country
													: null
											}
											onChange={this.handleCountryChange}
										/>
									</FormGroup>
								</Col>
								<Col lg="4">
									<FormGroup>
										<label
											className="labels"
											htmlFor="input-country"
											style={{ fontSize: "13px" }}
										>
											Postal code<span className="text-danger"> *</span>
										</label>
										<Input
											className="form-control"
											size="sm"
											id="input-postal-code"
											type="number"
											name="postalCode"
											defaultValue={
												this.props.myPlug.plug &&
												this.props.myPlug.plug.postalCode
													? this.props.myPlug.plug.postalCode
													: null
											}
											onChange={this.handlePostalCodeChange}
										/>
									</FormGroup>
								</Col>
							</Row>
							<Row>
								{" "}
								<Col xl="6" md="6">
									<FormGroup>
										<label
											className="labels"
											htmlFor="input-country"
											style={{ fontSize: "13px" }}
										>
											Upload logo<span className="text-danger"> *</span>
										</label>
										<ImgCrop rotate>
											<Upload
												action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
												listType="picture-card"
												fileList={this.state.filelist}
												onChange={this.onChange}
												onPreview={onPreview}
											>
												{" "}
												<img
													//  src={}
													src={`https://suppli-images.s3.af-south-1.amazonaws.com/${
														this.props.myPlug.plug &&
														this.props.myPlug.plug.logo
													}`}
													alt="avatar"
													style={{ width: "100%" }}
												/>
												{this.state.filelist.length < 1 && "+ Upload"}
											</Upload>
										</ImgCrop>
										{/* <Upload
											name="avatar"
											listType="picture-card"
											className="avatar-uploader"
											showUploadList={false}
											action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
											beforeUpload={this.beforeUpload}
											onChange={this.handleCoverChange}
										>
											{imageUrl ? (
												<img
													src={imageUrl}
													alt="avatar"
													style={{ width: "100%" }}
												/>
											) : (
												<img
													//  src={}
													src={`https://suppli-images.s3.af-south-1.amazonaws.com/${
														this.props.myPlug.plug &&
														this.props.myPlug.plug.logo
													}`}
													alt="avatar"
													style={{ width: "100%" }}
												/>
											)}
										</Upload> */}
									</FormGroup>
								</Col>
								<Col lg="6">
									<FormGroup>
										<label
											className="labels"
											htmlFor="input-country"
											style={{ fontSize: "13px" }}
										>
											Add tags
										</label>

										<TagsInput
											value={this.state.tags}
											onChange={this.handleTagsChange}
											tagProps={{ className: "react-tagsinput-tag info" }}
										/>
									</FormGroup>
								</Col>
							</Row>

							<hr className="my-2" />
						</Form>
						<Form>
							<Button
								className="my-4"
								color="default"
								block
								type="button"
								onClick={() => this.onSubmit()}
							>
								Update details
							</Button>
						</Form>
					</CardBody>
				</Card>
			</>
		);
	}
}

PlugApplication.defaultProps = {
	catergories: [],
};

const mapStateToProps = (state) => ({
	auth: state.auth.isAuthenticated,
	isAuthenticated: state.auth,
	loading: state.auth.loading,
	createdPlugLoading: state.createdPlug.loading,
	catergories: state.catergories.catergories,
	myPlug: state.myPlug,
});

export default connect(mapStateToProps, {
	createProduct,
	setAlert,
	updatePlug,
	getCatergories,
	createPlug,
})(withRouter(PlugApplication));
