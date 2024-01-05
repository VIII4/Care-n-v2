import React, { useState, Component, useCallback } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  OverlayView,
  InfoWindow,
  useJsApiLoader,
} from "@react-google-maps/api";
import mapStyles from "../../utils/mapStyles";
import ReportPanel from "../ReportPanel";
import IssuesPopUp from "../IssuePopUp";

const API_KEY = `${process.env.REACT_APP_GOOGLE_KEY}`;

// class Map extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isLoading: false,

//       showingReportPanel: false,
//       showingConfirmPanel: true,
//       showingIssueDetails: false,
//       reportingType: "",
//     };
//   }

//   //#region Map Options and Styling
//   //Load any additional libraries
//   libraries = [];

//   //Map Container Size
//   containerStyle = {
//     // this will either be "visible" or "hidden"
//     visibility: "visible",

//     width: "100vw",
//     height: "100vh",
//     maxWidth: "100%",
//     zIndex: 1,

//     // this is critical for full screen
//     position: "absolute",
//   };

//   //Options
//   options = {
//     disableDefaultUI: true,
//     styles: mapStyles.mostlyGrayScale,
//     clickableIcons: false,
//   };

//   //

//   //Marker Icons
//   icons = {
//     marker: {
//       url: `${process.env.PUBLIC_URL}/assets/images/markerA.png`,
//       origin: { x: 0, y: 0 },
//       anchor: { x: 30, y: 50 },
//       scaledSize: { width: 75, height: 75 },
//     },
//     markerA: {
//       url: `${process.env.PUBLIC_URL}/assets/images/markerB.png`,
//       origin: { x: 0, y: 0 },
//       anchor: { x: 16, y: -1 },
//       scaledSize: { width: 35, height: 35 },
//     },
//     markerB: {
//       url: `${process.env.PUBLIC_URL}/assets/images/markerC.png`,
//       origin: { x: 0, y: 0 },
//       anchor: { x: 30, y: 50 },
//       scaledSize: { width: 45, height: 45 },
//     },
//   };
//   //#endregion

//   //#region Handler Methods

//   onIssueMarkerClick = (issue) => {
//     this.props.setSelectedIssue(issue);
//     this.setState({ showingReportPanel: false });
//   };

//   closeInfoWindow = () => {
//     this.props.setSelectedIssue(null);
//   };

//   closePanelWindow = () => {
//     this.setState({ showingReportPanel: false });
//   };

//   onUserMarkerClick = (event) => {
//     let toogle = !this.state.showingReportPanel;
//     //Test Toggle here
//     this.props.toggleReportPanel();
//     //this.setState({ showingReportPanel: toogle });
//     this.props.setSelectedIssue(null);
//   };

//   //#endregion

//   render() {
//     const {
//       localGovt,
//       currentLocation,
//       localIssues,
//       selectedIssue,
//       setSelectedIssue,
//       onVoteClick,
//       onReportIssueClick,
//       onResolveClick,
//       submitIssueReport,
//       //Test
//       showReportPanel,
//     } = this.props;

//     return (
//       <LoadScript googleMapsApiKey={API_KEY}>
//         <GoogleMap
//           google={this.props.google}
//           mapContainerStyle={this.containerStyle}
//           center={currentLocation}
//           zoom={15}
//           options={this.options}
//           onClick={this.closeInfoWindow}
//         >
//           {/* Set Home Marker for User Location */}
//           <Marker
//             position={currentLocation}
//             icon={this.icons.markerB}
//             //onClick={this.onUserMarkerClick}
//           ></Marker>
//           {/* Map through local issues and create marker for each*/}
//           {localIssues.map((issue, index) => {
//             if (issue.status !== "Closed") {
//               return (
//                 <Marker
//                   key={index}
//                   position={{
//                     lat: issue.latlng.lat,
//                     lng: issue.latlng.lng,
//                   }}
//                   icon={this.icons.markerA}
//                   clickable={true}
//                   onClick={() => {
//                     this.onIssueMarkerClick(issue);
//                   }}
//                 />
//               );
//             }
//           })}
//           {/* Enable Info pop up for issue marker */}
//           {selectedIssue && (
//             <InfoWindow
//               onCloseClick={this.closeInfoWindow}
//               position={{
//                 lat: selectedIssue.latlng.lat,
//                 lng: selectedIssue.latlng.lng,
//               }}
//             >
//               <IssuesPopUp
//                 localGovt={localGovt}
//                 selectedIssue={selectedIssue}
//                 onVoteClick={onVoteClick}
//                 onResolveClick={onResolveClick}
//               />
//             </InfoWindow>
//           )}
//           {/* Enable report issue pop up panel and additional details panel*/}
//           {showReportPanel && (
//             <ReportPanel
//               currentLocation={currentLocation}
//               onReportIssueClick={onReportIssueClick}
//               submitIssueReport={submitIssueReport}
//             />
//           )}
//           {/* Test */}
//         </GoogleMap>
//       </LoadScript>
//     );
//   }
// }

const Map = (props) => {

  const {
    localGovt,
    currentLocation,
    localIssues,
    selectedIssue,
    setSelectedIssue,
    onVoteClick,
    onReportIssueClick,
    onResolveClick,
    submitIssueReport,
    //Test
    showReportPanel,
  } = props;
  
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY
  })

  const [isLoading, setIsLoading] = useState(false);
  const [showingReportPanel, setShowingReportPanel] = useState(false);
  const [showingConfirmPanel, setShowingConfirmPanel] = useState(true);
  const [showingIssueDetails, setShowingIssueDetails] = useState(false);
  const [reportingType, setReportingType] = useState("");


  //#region Map Options and Styling
  //Load any additional libraries
  let libraries = [];

  const [map, setMap] = useState(null)

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])


  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  //Map Container Size
  const containerStyle = {
    // this will either be "visible" or "hidden"
    visibility: "visible",

    width: "100vw",
    height: "100vh",
    maxWidth: "100%",
    zIndex: 1,

    // this is critical for full screen
    position: "absolute",
  };

  //Options
  const options = {
    disableDefaultUI: true,
    styles: mapStyles.mostlyGrayScale,
    clickableIcons: false,
  };

  //Marker Icons
  const icons = {
    marker: {
      url: `${process.env.PUBLIC_URL}/assets/images/markerA.png`,
      origin: { x: 0, y: 0 },
      anchor: { x: 30, y: 50 },
      scaledSize: { width: 75, height: 75 },
    },
    markerA: {
      url: `${process.env.PUBLIC_URL}/assets/images/markerB.png`,
      origin: { x: 0, y: 0 },
      anchor: { x: 16, y: -1 },
      scaledSize: { width: 35, height: 35 },
    },
    markerB: {
      url: `${process.env.PUBLIC_URL}/assets/images/markerC.png`,
      origin: { x: 0, y: 0 },
      anchor: { x: 30, y: 50 },
      scaledSize: { width: 45, height: 45 },
    },
  };
  //#endregion

  //#region Handler Methods

  const onIssueMarkerClick = (issue) => {
    setSelectedIssue(issue);
    setShowingReportPanel(false);
  };

  const closeInfoWindow = () => {
    setSelectedIssue(null);
  };

  const closePanelWindow = () => {
    setShowingReportPanel(false);
  };

  const onUserMarkerClick = (event) => {
    let toogle = !showingReportPanel;
    //Test Toggle here
    toggleReportPanel();
    //this.setState({ showingReportPanel: toogle });
    setSelectedIssue(null);
  };

  //#endregion

  return (
    <>
    {isLoaded && (
      <GoogleMap
          google={google}
          mapContainerStyle={containerStyle}
          center={currentLocation}
          zoom={15}
          options={options}
          onClick={closeInfoWindow}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          {/* Set Home Marker for User Location */}
          <Marker
            position={currentLocation}
            icon={icons.markerB}
            //onClick={this.onUserMarkerClick}
          ></Marker>
          {/* Map through local issues and create marker for each*/}
          {localIssues.map((issue, index) => {
            if (issue.status !== "Closed") {
              return (
                <Marker
                  key={index}
                  position={{
                    lat: issue.latlng.lat,
                    lng: issue.latlng.lng,
                  }}
                  icon={icons.markerA}
                  clickable={true}
                  onClick={() => {
                    onIssueMarkerClick(issue);
                  }}
                />
              );
            }
          })}
          {/* Enable Info pop up for issue marker */}
          {selectedIssue && (
            <InfoWindow
              onCloseClick={closeInfoWindow}
              position={{
                lat: selectedIssue.latlng.lat,
                lng: selectedIssue.latlng.lng,
              }}
            >
              <IssuesPopUp
                localGovt={localGovt}
                selectedIssue={selectedIssue}
                onVoteClick={onVoteClick}
                onResolveClick={onResolveClick}
              />
            </InfoWindow>
          )}
          {/* Enable report issue pop up panel and additional details panel*/}
          {showReportPanel && (
            <ReportPanel
              currentLocation={currentLocation}
              onReportIssueClick={onReportIssueClick}
              submitIssueReport={submitIssueReport}
            />
          )}
          {/* Test */}
        </GoogleMap>
    )}
    </>
  );
}


export default Map;
