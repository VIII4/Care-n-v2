const mongoose = require("mongoose");
const Issue = require("../models/issue");
const User = require("../models/users");

// ============== //
// local mongoose //
// ============== //
// npm run seed ...
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/caren");

// =============== //
// mlab atlas //
// =============== //
// mongoose.connect(
//   process.env.MONGODB_URI ||
//     "mongodb+srv://admin:CarenTest1234@cluster0.lp01o.mongodb.net/caren?retryWrites=true&w=majority"
// );

const issueSeed = [
  //Oakland
  {
    createdby: "testUser", //
    category: "Structural",
    descr: "Building is moldy",
    voteCount: 0,
    votedby: [],
    latlng: {
      lat: 37.805105,
      lng: -122.218504,
    }, //
    images: [
      "https://www.masslive.com/resizer/wYXyLYCl6_C9qPgsE6HXaLC3ZV0=/700x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/UODPL6OKXNARPPDLXNGZIAGVW4.jpg",
      "https://ewscripps.brightspotcdn.com/dims4/default/5b35209/2147483647/strip/true/crop/2048x1152+0+192/resize/1280x720!/quality/90/?url=http%3A%2F%2Fewscripps-brightspot.s3.amazonaws.com%2F1c%2F06%2F472efac44550b56451d49f256eb5%2Feztwopqx0aecilk.jpeg",
      "https://media.tegna-media.com/assets/WPMT/images/d9aa57bd-f174-4b98-bebe-0bf76ca250db/d9aa57bd-f174-4b98-bebe-0bf76ca250db_1920x1080.jpg",
    ],
    zipcode: 94602,
    status: "Voting",
    date: Date(), //
  },
  {
    createdby: "testUser", //
    date: Date(), //
    latlng: {
      lat: 37.804363,
      lng: -122.271111,
    }, //
    category: "Wild Life",
    images: [
      "https://ca-times.brightspotcdn.com/dims4/default/3cafbd8/2147483647/strip/true/crop/3240x2108+0+0/resize/1486x967!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F0e%2F4f%2Faaab692f4d43bf79a4f51f304583%2Fla-photos-1staff-496739-me-monrovia-bear0a2-ik.jpg",
      "https://tpgonlinedaily.com/wp-content/uploads/2014/10/Fox-Cubs.jpg",
      "https://arc-anglerfish-arc2-prod-tbt.s3.amazonaws.com/public/BRZPHDWETII6TKTRIBWI6S7HAY.jpg",
    ],
    descr: "Deer crossing, needs sign!",
    voteCount: 0,
    votedby: [],
    zipcode: 94602,
    status: "Closed",
  },
  {
    createdby: "testUser", //
    date: Date(), //
    latlng: {
      lat: 37.801816,
      lng: -122.21537,
    }, //
    category: "Utility",
    images: [
      "https://wtop.com/wp-content/uploads/2019/05/Severe_Weather_79862-1880x1254.jpg",
      "https://www.oregonlive.com/resizer/tZF1SL37Z7d6JvcwsuoGVKwE_lg=/450x0/smart/arc-anglerfish-arc2-prod-advancelocal.s3.amazonaws.com/public/MIOVITER6RBZ5HLXC5N2KMZLZ4.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRzjzROIgLAEE0CHdOlqpd_JkE5O4ZoiRFLjA&usqp=CAU",
    ],
    descr: "Power line down",
    voteCount: 0,
    votedby: [],
    zipcode: 94602,
    status: "Voting",
  },
  {
    createdby: "testUser", //
    date: Date(), //
    latlng: {
      lat: 37.800527,
      lng: -122.216014,
    }, //
    category: "Roads",
    images: [
      "https://images.theconversation.com/files/233448/original/file-20180824-149463-1hzm435.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=496&fit=clip",
      "https://townsquare.media/site/385/files/2019/02/GettyImages-929942316.jpg?w=980&q=75",
      "https://si.wsj.net/public/resources/images/B3-AG381_NYPOTH_GR_20180430181526.jpg",
    ],
    descr: "Big ASS pothole",
    voteCount: 0,
    votedby: [],
    zipcode: 94602,
    status: "Voting",
  },
  {
    createdby: "testUser", //
    date: Date(), //
    latlng: {
      lat: 37.793067,
      lng: -122.226922,
    }, //
    category: "Vandalism",
    voteCount: 0,
    votedby: [],
    images: [
      "https://griffin-local.imgix.net/kotv/production/2015/August/7/police-investigate-vandalism-in-tulsa-neighborhood.1439004909000-0.jpeg?w=1050&h=590.617&fit=crop",
      "https://www.ksn.com/wp-content/uploads/sites/13/2017/10/riverside-vandalism-1_35952735_ver1.0.jpg",
      "https://www.mcall.com/resizer/i225QgC_MK8vfInAJ2eu478RzmE=/800x450/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/SFPQ5VMGFZEYHPYTDQB4O75KLY.jpg",
    ],
    descr: "graffiti on elementary school",
    zipcode: 94602,
    status: "Voting",
  },
  {
    createdby: "testUser", //
    date: Date(), //
    latlng: {
      lat: 37.780382,
      lng: -122.226748,
    }, //
    category: "Trash",
    descr: "park litter",
    voteCount: 0,
    votedby: [],
    zipcode: 94602,
    status: "Voting",
  },
  //San Francisco
  {
    createdby: "testUser",
    date: Date(),
    latlng: {
      lat: 37.774785,
      lng: -122.458556,
    },
    category: "Utility",
    images: [
      "https://wtop.com/wp-content/uploads/2019/05/Severe_Weather_79862-1880x1254.jpg",
      "https://www.oregonlive.com/resizer/tZF1SL37Z7d6JvcwsuoGVKwE_lg=/450x0/smart/arc-anglerfish-arc2-prod-advancelocal.s3.amazonaws.com/public/MIOVITER6RBZ5HLXC5N2KMZLZ4.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRzjzROIgLAEE0CHdOlqpd_JkE5O4ZoiRFLjA&usqp=CAU",
    ],
    descr: "Power line down",
    voteCount: 0,
    votedby: ["5f065921f938a110b0b804d0"],
    zipcode: 94102,
    status: "Voting",
  },
  {
    createdby: "testUser",
    date: Date(),
    latlng: {
      lat: 37.743843,
      lng: -122.440004,
    },
    category: "Roads",
    images: [
      "https://images.theconversation.com/files/233448/original/file-20180824-149463-1hzm435.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=496&fit=clip",
      "https://townsquare.media/site/385/files/2019/02/GettyImages-929942316.jpg?w=980&q=75",
      "https://si.wsj.net/public/resources/images/B3-AG381_NYPOTH_GR_20180430181526.jpg",
    ],
    descr: "Big ASS pothole",
    voteCount: 0,
    votedby: [],
    zipcode: 94102,
    status: "Voting",
  },
  {
    createdby: "testUser",
    date: Date(),
    latlng: {
      lat: 37.751444,
      lng: -122.418361,
    },
    images: [
      "https://www.masslive.com/resizer/wYXyLYCl6_C9qPgsE6HXaLC3ZV0=/700x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/UODPL6OKXNARPPDLXNGZIAGVW4.jpg",
      "https://ewscripps.brightspotcdn.com/dims4/default/5b35209/2147483647/strip/true/crop/2048x1152+0+192/resize/1280x720!/quality/90/?url=http%3A%2F%2Fewscripps-brightspot.s3.amazonaws.com%2F1c%2F06%2F472efac44550b56451d49f256eb5%2Feztwopqx0aecilk.jpeg",
      "https://media.tegna-media.com/assets/WPMT/images/d9aa57bd-f174-4b98-bebe-0bf76ca250db/d9aa57bd-f174-4b98-bebe-0bf76ca250db_1920x1080.jpg",
    ],
    category: "Structural",
    descr: "Building is moldy",
    voteCount: 0,
    votedby: [],
    zipcode: 94102,
    status: "Voting",
  },
  {
    createdby: "testUser", //
    date: Date(), //
    latlng: {
      lat: 37.759044,
      lng: -122.448249,
    }, //
    images: [
      "https://griffin-local.imgix.net/kotv/production/2015/August/7/police-investigate-vandalism-in-tulsa-neighborhood.1439004909000-0.jpeg?w=1050&h=590.617&fit=crop",
      "https://www.ksn.com/wp-content/uploads/sites/13/2017/10/riverside-vandalism-1_35952735_ver1.0.jpg",
      "https://www.mcall.com/resizer/i225QgC_MK8vfInAJ2eu478RzmE=/800x450/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/SFPQ5VMGFZEYHPYTDQB4O75KLY.jpg",
    ],
    category: "Vandalism",
    descr: "see title",
    voteCount: 0,
    votedby: [],
    zipcode: 94102,
    status: "Voting",
  },
  // San Diego
  {
    createdby: "testUser", //
    date: Date(), //
    latlng: { lat: 32.869928, lng: -117.219032 }, //
    category: "Wildlife",
    descr: "Seaworld Escapeees",
    voteCount: 0,
    votedby: [],
    zipcode: 92122,
    status: "Voting",
  },
  {
    createdby: "testUser", //
    date: Date(), //
    latlng: {
      lat: 32.859258,
      lng: -117.222982,
    }, //
    category: "Utility",
    descr: "Gasline exposed",
    voteCount: 0,
    votedby: [],
    zipcode: 92122,
    status: "Voting",
  },
  {
    createdby: "testUser", //
    date: Date(), //
    latlng: {
      lat: 32.880452,
      lng: -117.217486,
    }, //
    category: "Structural",
    descr: "asbestos exposed on wall",
    voteCount: 0,
    votedby: [],
    zipcode: 92122,
    status: "Voting",
  },
  {
    createdby: "testUser", //
    date: Date(), //
    latlng: {
      lat: 32.868198,
      lng: -117.201854,
    }, //
    category: "Road",
    descr: "Need stop sign here",
    voteCount: 0,
    votedby: [],
    zipcode: 92122,
    status: "Voting",
  },
];

const userSeed = [
  {
    username: "TestUser",
    password: "password",
    remainingvotes: 3,
  },
  {
    username: "SamIam",
    password: "IamSam",
    remainingvotes: 3,
  },
];

// db.Book.remove({})
//   .then(() => db.Book.collection.insertMany(bookSeed))
//   .then((data) => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch((err) => {
//     console.error(err);
//     process.exit(1);
//   });

function seed() {
  Issue.collection
    .insertMany(issueSeed)
    .then((data) => {
      console.log(data.result.n + " records inserted!");
      User.collection.insertMany(userSeed).then((data) => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
      });
    })
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
}

Issue.remove()
  .then((res) => {
    User.remove().then((res) => seed());
  })
  .catch((err) => console.log(err));
