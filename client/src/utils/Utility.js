//Import random generator that recieves location and creates points, then feeds location into sample dataset, return dataset
import randomLocation from "random-location";
import API from "../utils/API";

const sampleDataSet = [
  {
    category: "Utility",
    descr: "Power line down",
    createdby: "testUser",
    date: Date(),
    voteCount: 0,
    status: "Voting",
    zipcode: 99999,
    votedby: ["testUserID"],
    images: [
      "https://wtop.com/wp-content/uploads/2019/05/Severe_Weather_79862-1880x1254.jpg",
      "https://www.oregonlive.com/resizer/tZF1SL37Z7d6JvcwsuoGVKwE_lg=/450x0/smart/arc-anglerfish-arc2-prod-advancelocal.s3.amazonaws.com/public/MIOVITER6RBZ5HLXC5N2KMZLZ4.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRzjzROIgLAEE0CHdOlqpd_JkE5O4ZoiRFLjA&usqp=CAU",
    ],
  },
  {
    createdby: "testUser",
    date: Date(),

    category: "Roads",
    images: [
      "https://images.theconversation.com/files/233448/original/file-20180824-149463-1hzm435.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=496&fit=clip",
      "https://townsquare.media/site/385/files/2019/02/GettyImages-929942316.jpg?w=980&q=75",
      "https://si.wsj.net/public/resources/images/B3-AG381_NYPOTH_GR_20180430181526.jpg",
    ],
    descr: "Big ASS pothole",
    voteCount: 0,
    votedby: [],
    status: "Voting",
  },
  {
    createdby: "testUser",
    date: Date(),

    images: [
      "https://www.masslive.com/resizer/wYXyLYCl6_C9qPgsE6HXaLC3ZV0=/700x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/UODPL6OKXNARPPDLXNGZIAGVW4.jpg",
      "https://ewscripps.brightspotcdn.com/dims4/default/5b35209/2147483647/strip/true/crop/2048x1152+0+192/resize/1280x720!/quality/90/?url=http%3A%2F%2Fewscripps-brightspot.s3.amazonaws.com%2F1c%2F06%2F472efac44550b56451d49f256eb5%2Feztwopqx0aecilk.jpeg",
      "https://media.tegna-media.com/assets/WPMT/images/d9aa57bd-f174-4b98-bebe-0bf76ca250db/d9aa57bd-f174-4b98-bebe-0bf76ca250db_1920x1080.jpg",
    ],
    category: "Structural",
    descr: "Building is moldy",
    voteCount: 0,
    votedby: [],

    status: "Voting",
  },
  {
    createdby: "testUser", //
    date: Date(), //

    images: [
      "https://griffin-local.imgix.net/kotv/production/2015/August/7/police-investigate-vandalism-in-tulsa-neighborhood.1439004909000-0.jpeg?w=1050&h=590.617&fit=crop",
      "https://www.ksn.com/wp-content/uploads/sites/13/2017/10/riverside-vandalism-1_35952735_ver1.0.jpg",
      "https://www.mcall.com/resizer/i225QgC_MK8vfInAJ2eu478RzmE=/800x450/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/SFPQ5VMGFZEYHPYTDQB4O75KLY.jpg",
    ],
    category: "Vandalism",
    descr: "see title",
    voteCount: 0,
    votedby: [],

    status: "Voting",
  },
];

// let data = {};

// data.category = "";
// data.descr = "descValue";
// data.createdby = "testUser";
// data.date = Date();
// data.votecount = 1;
// data.status = "Voting";
// data.zipcode = 94602;
// data.votedby = ["testUserID"];
// data.latlng = this.state.currentLocation;
// data.images = res.data;

// Helper Functions
const assignLocationToData = () => {
  //For each data set, create location, assign to data, submit data
};

export default {
  //Get  X Random Locations
  getRandomLocation: function (currentLocation, distance) {
    return randomLocation.randomCirclePoint(currentLocation, distance);
  },

  createRandomData: function (currentLocation) {
    const p = {
      latitude: currentLocation.lat,
      longitude: currentLocation.lng,
    };

    let _temp = [];
    sampleDataSet.forEach((data) => {
      let r = this.getRandomLocation(p, 5000);
      data.latlng = {
        lat: r.latitude,
        lng: r.longitude,
      };
      _temp.push(data);
    });
    return _temp;
  },

  //Function to get location and send out array of
  //Send Api request to create issue in database
  // API.createIssue(data)
  // .then((res) => {
  //   console.log(res);
  //   this.loading(false);
  // })
  // .catch((err) => console.log(err));
};
