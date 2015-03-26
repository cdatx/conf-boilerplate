module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "Container Days Austin 2015",
      description: "High quality, local discussion on Docker, CoreOS, LXC etc.",
      date: "March 27 and 28, 2015",

      // If your event is free, just comment this line
      price: "$60",
      venue: "Hawaiian Falls",
      address: "18500 N SH 130",
      city: "Pflugerville",
      state: "Texas"
    },
    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    callToAction: {
        text: "Register now!",
        link: "https://www.eventbrite.com/e/container-days-austin-2015-tickets-15159477405"
    },

    // Site info
    site: {
      theme: "yellow-swan",
      url: "http://braziljs.github.io/conf-boilerplate/",
      googleanalytics: "UA-33656081-1"
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      'about',
      'location',
      'speakers',
      'openspaces',
      'schedule',
      'workshop',
      'sponsors',
      'partners',
      'contact',
      'twitter'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "About",
      location: "Location",
      speakers: "Speakers",
      openspaces: "Open Spaces",
      schedule: "Schedule",
      sponsors: "Sponsors",
      partners: "Partners",
      contact: "Contact",
      twitter: "Twitter",
      workshop: "Workshop"
    },

    // The entire schedule
    schedule: [
      {
        name: "Dave Nielsen",
        photo: "themes/yellow-swan/img/davenielsen.jpg",
        bio: "By day, Dave is a consultant helping firms engage with influential leaders in cloud-related communities. He is particularly fascinated by Cloud Computing APIs, Big Data & Platforms. By night, Dave is the co-founder of CloudCamp, a community of disruptive cloud enthusiasts and community organizers in cities around the world.",
        presentation: {
          title: "Hands-on Container Workshop (sponsored by Altoros)",
          description: "Bring your laptop and get ready to push. Dave Nielsen and a crack team of mentors are going to help you give birth to your first baby container. In the morning you will learn about the Docker CLI, Dockerfile, and how to push your image to a local Docker Registry. In the afternoon, you will learn how to deploy your container to multiple targets such as CoreOS, Cloud Foundry and AWS.",
          time: "Friday, 9:00am"
        },
        link: {
          href: "https://twitter.com/davenielsen",
          text: "@davenielsen",
        }
      },
      {
        name: "Sign In",
        time: "Friday, 6:00pm"
      },
      {
        name: "Boyd Hemphill",
        photo: "https://pbs.twimg.com/profile_images/3525655355/04dafec967eea72a64c815f4af0c68a4_400x400.jpeg",
        bio: "In his capacity as Evangelist at StackEngine, Boyd dreamed of a DevOps Days style conference for the containerization revolution.",
        presentation: {
          title: "Welcome to Container Days",
          description: "Welcome to the first ever Container Days.",
          time: "Friday, 6:30pm"
        },
        link: {
          href: "https://twitter.com/behemphi",
          text: "@behemphi"
        }
      },
      {
        name: "Brian 'Redbeard' Harrington",
        photo: "themes/yellow-swan/img/redbeard.jpg",
        bio: "Brian is a principal architect at CoreOS.",
        presentation: {
          title: "Opening Guest Speaker",
          description: "Brian 'Redbeard' Harrington is a principal architect at CoreOS and will be talking about CoreOS and Rocket.",
          time: "Friday, 6:45pm"
        }
      },
      {
        name: "Ernest Mueller",
        photo: "https://pbs.twimg.com/profile_images/1781349516/ernest_400x400.JPG",
        presentation: {
          title: "Opening Circle: Topics and Timeslots",
          description: "Creation of Saturdays topics and schedule",
          time: "Friday, 7:45pm"
        },
        link: {
          href: "https://twitter.com/ernestmueller",
          text: "@ernestmueller"
        }
      },
      {
        name: "Social Hour",
        time: "Friday, 9:00pm"
      },
      {
        name: "Breakfast and Sign In",
        time: "Saturday, 9:00am"
      },
      {
        name: "Ernest Mueller & Boyd Hemphill",
        photo: "https://pbs.twimg.com/profile_images/1781349516/ernest_400x400.JPG",
        presentation: {
          title: "Opening Circle Reprise",
          description: "Rules, Leading a Talk, Attending a Talk",
          time: "Saturday, 9:15am"
        }
      },
      {
        name: "Gabriel Monroy",
        photo: "themes/yellow-swan/img/gabemonroy.png",
        bio: "Gabe is the creator of Deis and the CTO at OpDemand.",
        presentation: {
          title: "Day Two Guest Speaker",
          description: "Gabriel Monroy, the creator of Deis, and the CTO at OpDemand, will talk about the components and layers of a container ecosystem, laying the groundwork for openspaces through the day.",
          time: "Saturday, 9:30am"
        },
        link: {
          href: "https://twitter.com/gabrtv",
          text: "@gabrtv"
        }
      },
      {
        name: "Unconference Session 1",
        time: "Saturday, 10:30am"
      },
      {
        name: "Unconference Session 2",
        time: "Saturday, 11:30am"
      },
      {
        name: "Lunch and Lean Coffee training.",
        time: "Saturday, 12:30pm"
      },
      {
        name: "Unconference Session 3",
        time: "Saturday, 2:00pm"
      },
      {
        name: "Unconference Session 4",
        time: "Saturday, 3:00pm"
      },
      {
        name: "Closing Circle",
        time: "Saturday, 4:00pm"
      },
      {
        name: "#beerops",
        time: "Saturday, 4:30pm"
      }
    ],

    // List of Sponsors
    sponsors: [
      {
        name: "StackEngine",
        logo: "http://stackengine.com/wp-content/uploads/2014/04/StackEngine_Lo_FF1-e1398284107204.jpg",
        url: "http://stackengine.com/"
      },
      {
        name: "CoreOS",
        logo: "themes/yellow-swan/img/sponsor/coreos.png",
        url: "https://coreos.com/"
      },
      {
        name: "Hawaiian Falls",
        logo: "http://www.hfalls.com/themes/hfallstest/images/hfalls-logo-pflugerville-on.png",
        url: "http://www.hfalls.com/pflugerville/"
      },
      {
        name: "W2O",
        logo: "themes/yellow-swan/img/sponsor/w2o.jpg",
        url: "http://w2ogroup.com/"
      },
      {
        name: "Blue Box Cloud",
        logo: "themes/yellow-swan/img/sponsor/bluebox.jpg",
        url: "https://www.blueboxcloud.com"
      },
      {
        name: "Flux7",
        logo: "themes/yellow-swan/img/sponsor/flux7.jpg",
        url: "http://flux7.com"
      },
      {
        name: "Glider Labs",
        logo: "themes/yellow-swan/img/sponsor/gliderlabs.jpeg",
        url: "http://gliderlabs.com/"
      },
      {
        name: "New Iron",
        logo: "themes/yellow-swan/img/sponsor/newiron.png",
        url: "http://www.newiron.com/"
      },
      {
        name: "Go Continuous Delivery",
        logo: "themes/yellow-swan/img/sponsor/thoughtworks.jpg",
        url: "http://www.go.cd/"
      },
      {
        name: "Altoros",
        logo: "themes/yellow-swan/img/sponsor/altoros.png",
        url: "http://www.altoros.com/"
      }
    ],

    // List of Partners
    partners: [
      {
        name: "Stack Engine",
        logo: "http://stackengine.com/wp-content/uploads/2014/04/StackEngine_Lo_FF1-e1398284107204.jpg",
        url: "http://stackengine.com/"
      }
    ],

    // Theme path
    getTheme: function() {
      return "themes/" + this.site.theme;
    },

    // Site Path
    getUrl: function() {
    	return this.site.url;
    }
  }
};
