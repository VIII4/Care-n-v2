//Import random generator that recieves location and creates points, then feeds location into sample dataset, return dataset
import randomLocation from "random-location";
import API from "./API";

const sampleData = [
  {
    category: "Utility",
    descr: "Power line down *SAMPLE*",
    images: [
      "https://wtop.com/wp-content/uploads/2019/05/Severe_Weather_79862-1880x1254.jpg",
      "https://www.oregonlive.com/resizer/tZF1SL37Z7d6JvcwsuoGVKwE_lg=/450x0/smart/arc-anglerfish-arc2-prod-advancelocal.s3.amazonaws.com/public/MIOVITER6RBZ5HLXC5N2KMZLZ4.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRzjzROIgLAEE0CHdOlqpd_JkE5O4ZoiRFLjA&usqp=CAU",
    ],
  },
  {
    category: "Roads",
    descr: "Big ASS pothole *SAMPLE*",
    images: [
      "https://images.theconversation.com/files/233448/original/file-20180824-149463-1hzm435.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=496&fit=clip",
      "https://townsquare.media/site/385/files/2019/02/GettyImages-929942316.jpg?w=980&q=75",
      "https://si.wsj.net/public/resources/images/B3-AG381_NYPOTH_GR_20180430181526.jpg",
    ],
  },
  {
    category: "Vandalism",
    descr: "see title *SAMPLE*",
    images: [
      "https://griffin-local.imgix.net/kotv/production/2015/August/7/police-investigate-vandalism-in-tulsa-neighborhood.1439004909000-0.jpeg?w=1050&h=590.617&fit=crop",
      "https://www.ksn.com/wp-content/uploads/sites/13/2017/10/riverside-vandalism-1_35952735_ver1.0.jpg",
      "https://www.mcall.com/resizer/i225QgC_MK8vfInAJ2eu478RzmE=/800x450/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/SFPQ5VMGFZEYHPYTDQB4O75KLY.jpg",
    ],
  },
];

export default {
  //Get  X Random Locations
  getRandomLocation: function (currentLocation, distance) {
    return randomLocation.randomCirclePoint(currentLocation, distance);
  },

  // createRandomData: function (currentLocation) {
  //   const p = {
  //     latitude: currentLocation.lat,
  //     longitude: currentLocation.lng,
  //   };

  //   sampleData.forEach((sample) => {
  //     let data = {};
  //     let r = this.getRandomLocation(p, 2000);
  //     data.category = sample.category;
  //     data.descr = sample.descr;
  //     data.createdby = "testUser";
  //     data.votecount = 1;
  //     data.status = "Voting";
  //     data.zipcode = 94602;
  //     data.date = Date();
  //     data.votedby = ["testUserID"];
  //     data.latlng = {
  //       lat: r.latitude,
  //       lng: r.longitude,
  //     };
  //     data.images = sample.images;

  //     API.createIssue(data)
  //       .then((res) => console.log(res))
  //       .catch((err) => console.log(err));
  //     // _sampleData.push(data);
  //   });
  // },

  createRandomData: function (currentLocation) {
    const p = {
      latitude: currentLocation.lat,
      longitude: currentLocation.lng,
    };

    const dataset = [];

    sampleData.forEach((sample) => {
      let data = {};
      let r = this.getRandomLocation(p, 1500);
      data.category = sample.category;
      data.descr = sample.descr;
      data.createdby = "testUser";
      data.votecount = 1;
      data.status = "Voting";
      data.zipcode = 94602;
      data.date = Date();
      data.votedby = ["testUserID"];
      data.latlng = {
        lat: r.latitude,
        lng: r.longitude,
      };
      data.images = sample.images;

      dataset.push(data);
    });

    API.createIssue(dataset)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  },
};
