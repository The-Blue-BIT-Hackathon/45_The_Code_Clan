import {
  TKRoot,
  TKUIRoutingQueryInput,
  TKUIMapView,
  tKRequestCurrentLocation,
} from "tripkit-react";
// import { queryMapConfig } from "doc-helper";

const config = {
  apiKey: "TRIPGO_API_KEY",
  onInitState: (state) => {
    // Set map viewport to focus user position
    tKRequestCurrentLocation(true, true).then((userPos) =>
      state.setViewport({ center: userPos.latLng, zoom: 13 })
    );

    // Enable directions view flag
    state.onDirectionsView(true);
  },
  onUpdateState: (state, prevState) =>
    // Select the first trip by default
    (!prevState.trips || prevState.trips.length === 0) &&
    state.trips &&
    state.trips.length > 0 &&
    state.onChange(state.trips[0]),
  //   ...queryMapConfig,
};

const Ways = () => {
  <TKRoot config={config}>
    <div style={{ height: "500px" }}>
      <div
        style={{
          position: "absolute",
          zIndex: "1",
          margin: "10px",
          width: "300px",
        }}
      >
        <TKUIRoutingQueryInput />
      </div>
      <TKUIMapView />
    </div>
  </TKRoot>;
};

export default Ways;
