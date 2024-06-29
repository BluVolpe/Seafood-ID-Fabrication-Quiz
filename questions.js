const questions = {
  introduction: [
    {
      question:
        "What are the key safety practices in a seafood fabrication room?",
      choice: [
        "Be alert, secure knives, and keep the worktable clean",
        "Use any knife available",
        "Leave equipment unattended",
        "Ignore sanitation rules",
      ],
      answer: "Be alert, secure knives, and keep the worktable clean",
      explanation:
        "Key safety practices include being alert to activities and others around you, securing knives, and keeping the worktable clean and organized.",
    },
    {
      question:
        "What is the role of the National Marine Fisheries Service (NMFS)?",
      choice: [
        "Manages, conserves, and protects marine resources",
        "Regulates agricultural land",
        "Handles air traffic control",
        "Oversees freshwater lakes",
      ],
      answer: "Manages, conserves, and protects marine resources",
      explanation:
        "The NMFS is responsible for the stewardship of national marine resources, including the management, conservation, and protection of living marine resources within the U.S. Exclusive Economic Zone.",
    },
    {
      question: "What does the swim bladder in fish help with?",
      choice: [
        "Maintaining buoyancy",
        "Filtering water",
        "Digesting food",
        "Protecting the heart",
      ],
      answer: "Maintaining buoyancy",
      explanation:
        "The swim bladder allows fish to maintain a constant buoyancy, enabling them to navigate different water depths efficiently.",
    },
    {
      question: "What is the correct storage temperature for live mollusks?",
      choice: ["35°- 40°F", "28°- 32°F", "39°- 45°F", "26°- 32°F"],
      answer: "35°- 40°F",
      explanation:
        "Live mollusks should be stored at temperatures between 35° and 40°F to maintain their freshness.",
    },
    {
      question: "What does 'F.A.S.' stand for in seafood processing?",
      choice: [
        "Frozen at Sea",
        "Fresh and Safe",
        "Fish and Seafood",
        "Fast and Secure",
      ],
      answer: "Frozen at Sea",
      explanation:
        "F.A.S. indicates 'Frozen at Sea,' a method of preserving seafood immediately after catch to maintain freshness.",
    },
    {
      question: "What is the 'up and over' technique used for?",
      choice: [
        "Hard boned fish with large rib cages",
        "Soft boned fish",
        "Flat fish",
        "Removing scales",
      ],
      answer: "Hard boned fish with large rib cages",
      explanation:
        "The 'up and over' technique is used for hard boned fish with large rib cages, such as those in the Cod and Bass family.",
    },
    {
      question: "What is the purpose of the myocommata in fish?",
      choice: [
        "Connective tissue between muscle fibers",
        "Muscle fibers in fish",
        "Bones in fish",
        "Gills in fish",
      ],
      answer: "Connective tissue between muscle fibers",
      explanation:
        "Myocommata (or myosepta) are the connective tissues between muscle fibers in fish.",
    },
    {
      question: "What is a pavé cut?",
      choice: [
        "A tile or square cut, uniform thickness from a filet",
        "A cross cut from a dressed fish",
        "A small rolled filet",
        "A 'minnow' size strip",
      ],
      answer: "A tile or square cut, uniform thickness from a filet",
      explanation:
        "A pavé is a tile or square cut with uniform thickness from a filet.",
    },
    {
      question: "What is the proper way to handle whole fish and their filets?",
      choice: ["With two hands", "By the tail", "By the head", "With one hand"],
      answer: "With two hands",
      explanation:
        "Fish should always be handled with two hands to prevent damage and maintain their integrity.",
    },
    {
      question: "What is the definition of 'in the round' in seafood purchasing?",
      choice: [
        "Fish sold just as it is caught",
        "Fish with internal organs removed",
        "Fish with scales and fins removed",
        "Fish cut into specific sizes",
      ],
      answer: "Fish sold just as it is caught",
      explanation:
        "'In the round' refers to fish sold just as it is caught from the water, without any cleaning or alteration.",
    },
    {
      question:
        "What are the primary responsibilities of the National Oceanic and Atmospheric Administration (NOAA)?",
      choice: [
        "Conditions of the oceans, major waterways, and the atmosphere",
        "Agricultural land management",
        "Inland freshwater resources",
        "Forest conservation",
      ],
      answer: "Conditions of the oceans, major waterways, and the atmosphere",
      explanation:
        "NOAA focuses on the conditions of the oceans, major waterways, and the atmosphere, providing weather forecasts, storm warnings, and climate monitoring.",
    },
    {
      question: "Why is 68% of seafood in the U.S. consumed in restaurants?",
      choice: [
        "Expert preparation, variety and access, perceived complexity",
        "Cheaper prices",
        "Lack of seafood at home",
        "Better marketing",
      ],
      answer: "Expert preparation, variety and access, perceived complexity",
      explanation:
        "Consumers prefer restaurant-prepared seafood due to expert preparation, perceived complexity of cooking at home, and the variety and access restaurants provide.",
    },
    {
      question: "What are the proper storage techniques for round fish?",
      choice: [
        "Place in a perforated pan, cover with flaked or crushed ice",
        "Store at room temperature",
        "Hang by the tail",
        "Store in plastic bags",
      ],
      answer: "Place in a perforated pan, cover with flaked or crushed ice",
      explanation:
        "Round fish should be placed in a perforated or draining pan, in a position to simulate swimming, and packed or covered with flaked or crushed ice.",
    },
    {
      question: "What is the purpose of the U.S. Exclusive Economic Zone (EEZ)?",
      choice: [
        "Regulate fisheries and resource exploitation within 200 nautical miles of the coastline",
        "Provide a recreational fishing area",
        "Serve as a military training zone",
        "Reserve area for scientific research",
      ],
      answer:
        "Regulate fisheries and resource exploitation within 200 nautical miles of the coastline",
      explanation:
        "The EEZ of the United States extends up to 200 nautical miles from the coastline, where the U.S. has special rights to regulate fisheries, maritime activities, and resource exploitation.",
    },
    {
      question: "What is cryogenic freezing?",
      choice: [
        "Exposure to super-cold air or a spray of liquid nitrogen or carbon dioxide",
        "Very cold air circulated over a product",
        "Packing fish in ice",
        "Storing fish at room temperature",
      ],
      answer:
        "Exposure to super-cold air or a spray of liquid nitrogen or carbon dioxide",
      explanation:
        "Cryogenic freezing involves exposing products to super-cold air or a spray of liquid nitrogen or carbon dioxide, preserving seafood with a taste and texture more resembling fresh.",
    },
    {
      question: "What is the correct storage temperature for fin fish?",
      choice: ["28°- 32°F", "35°- 40°F", "39° - 45°F", "26° - 32°F"],
      answer: "28°- 32°F",
      explanation:
        "Fin fish should be stored at deep chill temperatures between 28° and 32°F to maintain freshness.",
    },
    {
      question:
        "What is the significance of the 'straight' technique in seafood fabrication?",
      choice: [
        "Used for soft boned fish like salmon and trout",
        "Used for hard boned fish with large rib cages",
        "Used for removing scales",
        "Used for cutting fillets",
      ],
      answer: "Used for soft boned fish like salmon and trout",
      explanation:
        "The 'straight' technique is used for soft boned fish, such as those in the salmon and trout family, making it easier to cut and prepare.",
    },
    {
      question: "What does 'pan-dressed' mean in seafood purchasing?",
      choice: [
        "A smaller fish prepared for cooking with the bones in",
        "Fish sold just as it is caught",
        "Fish with internal organs removed",
        "Fish cut into specific sizes",
      ],
      answer: "A smaller fish prepared for cooking with the bones in",
      explanation:
        "'Pan-dressed' refers to a smaller fish prepared for cooking with the bones in; the head and tail may be removed or left as per preference.",
    },
    {
      question: "What are the proper storage techniques for flat fish?",
      choice: [
        "Place at a 45-60 degree angle, cover with flaked or crushed ice",
        "Store at room temperature",
        "Hang by the tail",
        "Store in plastic bags",
      ],
      answer: "Place at a 45-60 degree angle, cover with flaked or crushed ice",
      explanation:
        "Flat fish should be placed at a 45-60 degree angle to prevent water accumulation, with the pigmented side down, and packed or covered with flaked or crushed ice.",
    },
    {
      question: "What is the purpose of myotomes in fish?",
      choice: [
        "Muscle fibers in fish",
        "Connective tissue in fish",
        "Bones in fish",
        "Gills in fish",
      ],
      answer: "Muscle fibers in fish",
      explanation:
        "Myotomes are muscle fibers in fish that are shorter and more tender than those in meat.",
    },
    {
      question: "What does 'IQF' stand for in seafood processing?",
      choice: [
        "Individually Quick Frozen",
        "In Quality Freshness",
        "Immediately Quick Freeze",
        "Instant Quality Frozen",
      ],
      answer: "Individually Quick Frozen",
      explanation:
        "IQF stands for 'Individually Quick Frozen,' a common method of freezing fish to preserve freshness.",
    },
    {
      question: "What are the ideal storage temperatures for live crustaceans?",
      choice: ["39° - 45°F", "35°- 40°F", "28°- 32°F", "26°- 32°F"],
      answer: "39° - 45°F",
      explanation:
        "Live crustaceans should be stored at temperatures between 39° and 45°F to maintain their freshness.",
    },
    {
      question:
        "What is the function of the National Marine Fisheries Service (NMFS)?",
      choice: [
        "Management, conservation, and protection of living marine resources",
        "Regulation of freshwater lakes",
        "Oversight of inland agriculture",
        "Air traffic control",
      ],
      answer:
        "Management, conservation, and protection of living marine resources",
      explanation:
        "The NMFS is responsible for the stewardship of national marine resources, including the management, conservation, and protection of living marine resources within the U.S. Exclusive Economic Zone.",
    },
    {
      question: "What is a paupiette cut?",
      choice: [
        "A small rolled filet",
        "A cross cut from a dressed fish",
        "A tile or square cut",
        "A 'minnow' size strip",
      ],
      answer: "A small rolled filet",
      explanation:
        "A paupiette is a small rolled filet, usually a quarter filet, often used in gourmet cooking.",
    },
    {
      question: "What does 'drawn' mean in seafood purchasing?",
      choice: [
        "The fish has had its internal organs removed",
        "The fish is sold just as it is caught",
        "The fish has had its scales and fins removed",
        "The fish is cut into specific sizes",
      ],
      answer: "The fish has had its internal organs removed",
      explanation:
        "'Drawn' refers to fish that has had its internal organs removed, but the rest of the fish remains intact.",
    },
    {
      question:
        "What is the primary focus of the National Oceanic and Atmospheric Administration (NOAA)?",
      choice: [
        "Conditions of the oceans, major waterways, and the atmosphere",
        "Regulation of inland freshwater resources",
        "Management of agricultural land",
        "Conservation of forests",
      ],
      answer: "Conditions of the oceans, major waterways, and the atmosphere",
      explanation:
        "NOAA focuses on the conditions of the oceans, major waterways, and the atmosphere, providing weather forecasts, storm warnings, and climate monitoring.",
    },
    {
      question:
        "What is the significance of ServSafe in a seafood fabrication room?",
      choice: [
        "Maintaining sanitation at all times",
        "Regulating fishing seasons",
        "Monitoring fish populations",
        "Setting catch limits",
      ],
      answer: "Maintaining sanitation at all times",
      explanation:
        "ServSafe is important in maintaining sanitation at all times in a seafood fabrication room, ensuring food safety and hygiene.",
    },
    {
      question: "What does 'dressed' mean in seafood purchasing?",
      choice: [
        "The fish has had its internal organs, scales, and fins removed",
        "The fish is sold just as it is caught",
        "The fish has had its internal organs removed",
        "The fish is cut into specific sizes",
      ],
      answer: "The fish has had its internal organs, scales, and fins removed",
      explanation:
        "'Dressed' refers to fish that has had its internal organs, scales, and fins removed, making it ready for further processing.",
    },
    {
      question: "What are the proper storage techniques for live shellfish?",
      choice: [
        "Store in a high moisture refrigerator in perforated pans",
        "Store at room temperature",
        "Hang by the tail",
        "Store in plastic bags",
      ],
      answer: "Store in a high moisture refrigerator in perforated pans",
      explanation:
        "Live shellfish should be stored in a high moisture refrigerator in perforated pans to allow breathing, with wet towels or seaweed to cover.",
    },
    {
      question: "What is a goujon cut?",
      choice: [
        "A 'minnow' size strip usually intended for coating and frying",
        "A cross cut from a dressed fish",
        "A tile or square cut",
        "A small rolled filet",
      ],
      answer: "A 'minnow' size strip usually intended for coating and frying",
      explanation:
        "A goujon is a 'minnow' size strip usually intended for coating and frying.",
    },
    {
      question: "What is the proper storage temperature for caviar?",
      choice: ["28°- 32°F", "35°- 40°F", "39° - 45°F", "26° - 32°F"],
      answer: "28°- 32°F",
      explanation:
        "Caviar should be stored at temperatures between 28° and 32°F to maintain its quality and freshness.",
    },
    {
      question: "What is a butterfly cut in seafood fabrication?",
      choice: [
        "A pan-dressed fish with bones removed",
        "A cross cut from a dressed fish",
        "A tile or square cut",
        "A small rolled filet",
      ],
      answer: "A pan-dressed fish with bones removed",
      explanation:
        "A butterfly cut is a pan-dressed fish with the bones removed, making it easier to cook and serve.",
    },
    {
      question: "What is the 'blast freezing' method?",
      choice: [
        "Very cold air (-25 to -40°F) circulated over a product",
        "Exposure to super-cold air or a spray of liquid nitrogen or carbon dioxide",
        "Packing fish in ice",
        "Storing fish at room temperature",
      ],
      answer: "Very cold air (-25 to -40°F) circulated over a product",
      explanation:
        "Blast freezing involves circulating very cold air (-25 to -40°F) over a product that has been placed in trays or on racks in an enclosed space.",
    },
    {
      question: "What does 'portion cut' mean in seafood purchasing?",
      choice: [
        "Specific sizes or shapes of fish cut for serving",
        "Fish sold just as it is caught",
        "Fish with internal organs removed",
        "Fish with scales and fins removed",
      ],
      answer: "Specific sizes or shapes of fish cut for serving",
      explanation:
        "'Portion cut' refers to specific sizes or shapes of fish, like tranches or steaks, cut for serving.",
    },
    {
      question: "What is the function of myotomes in fish?",
      choice: [
        "Muscle fibers in fish",
        "Connective tissue in fish",
        "Bones in fish",
        "Gills in fish",
      ],
      answer: "Muscle fibers in fish",
      explanation:
        "Myotomes are muscle fibers in fish that are shorter and more tender than those in meat.",
    },
    {
      question: "What is the primary role of the swim bladder in fish?",
      choice: [
        "Maintain buoyancy",
        "Filter water",
        "Digest food",
        "Protect the heart",
      ],
      answer: "Maintain buoyancy",
      explanation:
        "The swim bladder allows fish to maintain a constant buoyancy, enabling them to navigate different water depths efficiently.",
    },
    {
      question: "What is a tranche cut in seafood fabrication?",
      choice: [
        "45° bias slice from a filet",
        "A cross cut from a dressed fish",
        "A tile or square cut",
        "A small rolled filet",
      ],
      answer: "45° bias slice from a filet",
      explanation:
        "A tranche is a 45° bias slice from a filet, often used in gourmet cooking for presentation.",
    },
    {
      question: "What is the correct storage temperature for smoked fish?",
      choice: ["26° - 32°F", "35°- 40°F", "39° - 45°F", "28°- 32°F"],
      answer: "26° - 32°F",
      explanation:
        "Smoked fish should be stored at temperatures between 26° and 32°F to maintain its quality and freshness.",
    },
    {
      question: "What is the proper way to handle fish to prevent damage?",
      choice: [
        "Always hold whole fish and their filets with two hands",
        "Pick up a fish by its tail",
        "Handle with one hand",
        "Drop fish into storage bins",
      ],
      answer: "Always hold whole fish and their filets with two hands",
      explanation:
        "Fish is very delicate and needs to be handled carefully; always hold whole fish and their filets with two hands to prevent damage.",
    },
    {
      question:
        "What is the significance of maintaining a clean worktable in seafood fabrication?",
      choice: [
        "Ensures safety and organization",
        "Prevents fish from drying out",
        "Increases the speed of cutting",
        "Improves the taste of fish",
      ],
      answer: "Ensures safety and organization",
      explanation:
        "Maintaining a clean and organized worktable ensures safety, organization, and efficiency in a seafood fabrication room.",
    },
    {
      question: "What is a goujonette cut?",
      choice: [
        "A 'cigarette' size strip used like a goujon",
        "A cross cut from a dressed fish",
        "A tile or square cut",
        "A small rolled filet",
      ],
      answer: "A 'cigarette' size strip used like a goujon",
      explanation:
        "A goujonette is a 'cigarette' size strip used like a goujon, often for coating and frying.",
    },
    {
      question:
        "What is the role of the National Marine Fisheries Service (NMFS)?",
      choice: [
        "Stewardship of national marine resources",
        "Regulation of inland agriculture",
        "Management of air traffic",
        "Oversight of national parks",
      ],
      answer: "Stewardship of national marine resources",
      explanation:
        "The NMFS is responsible for the stewardship of national marine resources, including the management, conservation, and protection of living marine resources within the U.S. Exclusive Economic Zone.",
    },
    {
      question: "What is the 'up and over' technique used for?",
      choice: [
        "Hard boned fish with large rib cages",
        "Soft boned fish",
        "Flat fish",
        "Removing scales",
      ],
      answer: "Hard boned fish with large rib cages",
      explanation:
        "The 'up and over' technique is used for hard boned fish with large rib cages, such as those in the Cod and Bass family.",
    },
    {
      question: "What is the purpose of the myocommata in fish?",
      choice: [
        "Connective tissue between muscle fibers",
        "Muscle fibers in fish",
        "Bones in fish",
        "Gills in fish",
      ],
      answer: "Connective tissue between muscle fibers",
      explanation:
        "Myocommata (or myosepta) are the connective tissues between muscle fibers in fish.",
    },
    {
      question: "What does 'dressed' mean in seafood purchasing?",
      choice: [
        "The fish has had its internal organs, scales, and fins removed",
        "The fish is sold just as it is caught",
        "The fish has had its internal organs removed",
        "The fish is cut into specific sizes",
      ],
      answer: "The fish has had its internal organs, scales, and fins removed",
      explanation:
        "'Dressed' refers to fish that has had its internal organs, scales, and fins removed, making it ready for further processing.",
    },
    {
      question: "What is the purpose of myotomes in fish?",
      choice: [
        "Muscle fibers in fish",
        "Connective tissue in fish",
        "Bones in fish",
        "Gills in fish",
      ],
      answer: "Muscle fibers in fish",
      explanation:
        "Myotomes are muscle fibers in fish that are shorter and more tender than those in meat.",
    },
    {
      question: "What is a paupiette cut?",
      choice: [
        "A small rolled filet",
        "A cross cut from a dressed fish",
        "A tile or square cut",
        "A 'minnow' size strip",
      ],
      answer: "A small rolled filet",
      explanation:
        "A paupiette is a small rolled filet, usually a quarter filet, often used in gourmet cooking.",
    },
    {
      question: "What is the function of the swim bladder in fish?",
      choice: [
        "Maintain buoyancy",
        "Filter water",
        "Digest food",
        "Protect the heart",
      ],
      answer: "Maintain buoyancy",
      explanation:
        "The swim bladder allows fish to maintain a constant buoyancy, enabling them to navigate different water depths efficiently.",
    },
    {
      question: "What is cryogenic freezing?",
      choice: [
        "Exposure to super-cold air or a spray of liquid nitrogen or carbon dioxide",
        "Very cold air circulated over a product",
        "Packing fish in ice",
        "Storing fish at room temperature",
      ],
      answer:
        "Exposure to super-cold air or a spray of liquid nitrogen or carbon dioxide",
      explanation:
        "Cryogenic freezing involves exposing products to super-cold air or a spray of liquid nitrogen or carbon dioxide, preserving seafood with a taste and texture more resembling fresh.",
    },
    {
      question: "What does 'pan-dressed' mean in seafood purchasing?",
      choice: [
        "A smaller fish prepared for cooking with the bones in",
        "Fish sold just as it is caught",
        "Fish with internal organs removed",
        "Fish cut into specific sizes",
      ],
      answer: "A smaller fish prepared for cooking with the bones in",
      explanation:
        "'Pan-dressed' refers to a smaller fish prepared for cooking with the bones in; the head and tail may be removed or left as per preference.",
    },
    {
      question: "What is a goujon cut?",
      choice: [
        "A 'minnow' size strip usually intended for coating and frying",
        "A cross cut from a dressed fish",
        "A tile or square cut",
        "A small rolled filet",
      ],
      answer: "A 'minnow' size strip usually intended for coating and frying",
      explanation:
        "A goujon is a 'minnow' size strip usually intended for coating and frying.",
    },
    {
      question: "What is the 'blast freezing' method?",
      choice: [
        "Very cold air (-25 to -40°F) circulated over a product",
        "Exposure to super-cold air or a spray of liquid nitrogen or carbon dioxide",
        "Packing fish in ice",
        "Storing fish at room temperature",
      ],
      answer: "Very cold air (-25 to -40°F) circulated over a product",
      explanation:
        "Blast freezing involves circulating very cold air (-25 to -40°F) over a product that has been placed in trays or on racks in an enclosed space.",
    },
  ],
  flatCut: [
    {
      question: "Coming soon",
      choice: [".", "..", "...", "...."],
      answer: ".",
      explanation:
        "...",
    },
  ],
  straightCut: [
    {
      question: "Coming soon",
      choice: [".", "..", "...", "...."],
      answer: ".",
      explanation:
        "...",
    },
  ],
  upAndOver: [
    {
      question: "Coming soon",
      choice: [".", "..", "...", "...."],
      answer: ".",
      explanation:
        "...",
    },
  ],
  mollusks: [
    {
      question: "Coming soon",
      choice: [".", "..", "...", "...."],
      answer: ".",
      explanation:
        "...",
    },
  ],
  crustaceans: [
    {
      question: "Coming soon",
      choice: [".", "..", "...", "...."],
      answer: ".",
      explanation:
        "...",
    },
  ],
  caviar: [
    {
      question: "Coming soon",
      choice: [".", "..", "...", "...."],
      answer: ".",
      explanation:
        "...",
    },
  ],
};
