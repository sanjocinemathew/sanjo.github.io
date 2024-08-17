
$(window).on('load', function () {
	'use strict';
	$('.preloader').fadeOut(100);
});

(function ($) {
	'use strict';

	$(window).on('scroll', function () {
		var scrolling = $(this).scrollTop();
		if (scrolling > 10) {
			$('.navigation').addClass('nav-bg');
		} else {
			$('.navigation').removeClass('nav-bg');
		}
	});

	// tab
	$('.tab-content').find('.tab-pane').each(function (idx, item) {
		var navTabs = $(this).closest('.code-tabs').find('.nav-tabs'),
			title = $(this).attr('title');
		navTabs.append('<li class="nav-item"><a class="nav-link" href="#">' + title + '</a></li>');
	});

	$('.code-tabs ul.nav-tabs').each(function () {
		$(this).find('li:first').addClass('active');
	});

	$('.code-tabs .tab-content').each(function () {
		$(this).find('div:first').addClass('active');
	});

	$('.nav-tabs a').click(function (e) {
		e.preventDefault();
		var tab = $(this).parent(),
			tabIndex = tab.index(),
			tabPanel = $(this).closest('.code-tabs'),
			tabPane = tabPanel.find('.tab-pane').eq(tabIndex);
		tabPanel.find('.active').removeClass('active');
		tab.addClass('active');
		tabPane.addClass('active');
	});

	// Accordions
	$('.collapse').on('shown.bs.collapse', function () {
		$(this).parent().find('.ti-plus').removeClass('ti-plus').addClass('ti-minus');
	}).on('hidden.bs.collapse', function () {
		$(this).parent().find('.ti-minus').removeClass('ti-minus').addClass('ti-plus');
	});

	//post slider
	$('.post-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		dots: false,
		arrows: true,
		prevArrow: '<button type=\'button\' class=\'prevArrow\'><i class=\'ti-angle-left\'></i></button>',
		nextArrow: '<button type=\'button\' class=\'nextArrow\'><i class=\'ti-angle-right\'></i></button>'
	});

	// copy to clipboard
	$('.copy').click(function () {
		$(this).siblings('.inputlink').select();
		document.execCommand('copy');
	});


	// instafeed
	if (($('#instafeed').length) !== 0) {
		var accessToken = $('#instafeed').attr('data-accessToken');
		var userFeed = new Instafeed({
			get: 'user',
			resolution: 'low_resolution',
			accessToken: accessToken,
			template: '<div class="instagram-post"><a href="{{link}}" target="_blank"><img src="{{image}}"></a></div>'
		});
		userFeed.run();
	}

	setTimeout(function () {
		$('.instagram-slider').slick({
			dots: false,
			speed: 300,
			autoplay: true,
			arrows: false,
			slidesToShow: 8,
			slidesToScroll: 1,
			responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 6
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 4
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2
				}
			}
			]
		});
	}, 1500);


	// popup video
	var $videoSrc;
	$('.video-btn').click(function () {
		$videoSrc = $(this).data('src');
	});
	$('#myModal').on('shown.bs.modal', function (e) {
		$('#video').attr('src', $videoSrc + '?autoplay=1&amp;modestbranding=1&amp;showinfo=0');
	});
	$('#myModal').on('hide.bs.modal', function (e) {
		$('#video').attr('src', $videoSrc);
	});



})(jQuery);

var data = {
	"author": {
		"id": "sanjomathew",
		"name": "Sanjo Cine Mathew",
		"shortName": "Sanjo Mathew",
		"photo": "images/author.png",
		"bio": "Counselling Psychologist, Skill Coach & Learning Facilitator",
		"socialLinks": {
			"facebook": "https://www.facebook.com/sanjo.mathew.39/",
			"linkedin": "https://www.linkedin.com/in/sanjocinemathew/",
			"instgram": "https://www.instagram.com/sanjocinemathew/",
			"youtube": "https://www.instagram.com/sanjocinemathew/"
		}
	},
	"tags": [
		{ "title": "#CrabMentality", "id": "1", "showInHome": true },
		{ "title": "#RisingAboveTheTide", "id": "2", "showInHome": true },
		{ "title": "#OvercomingNegativity", "id": "3", "showInHome": true },
		{ "title": "#PositiveMindset", "id": "4", "showInHome": true },
		{ "title": "#BreakTheCycle", "id": "5" },
		{ "title": "#SelfGrowth", "id": "6", "showInHome": false },
		{ "title": "#SupportEachOther", "id": "7" },
		{ "title": "#Inspiration", "id": "8", "showInHome": false },
	],
	"categories": {
		"cat1": "",
		"cat2": "",
		"cat3": "",
		"cat4": ""
	},
	"posts": [
		{
			"id": "crab-basket-mentality-sanjo-mathew-motivational-blog",
			"title": "Rising Above the Tide: Lessons from the Crab Basket Mentality.",
			"subTitle": "Echoes of Wisdom - Inspired by Life",
			"image": "crab-basket-mentality-sanjo-mathew-blog.png",
			"authorId": "sanjomathew",
			"date": "01 Jan, 2024",
			"readTime": "3 min to Read",
			"tags": [
				"#CrabMentality",
				"#RisingAboveTheTide",
				"#OvercomingNegativity",
				"#Empowerment",
				"#PositiveMindset",
				"#BreakTheCycle",
				"#SelfGrowth",
				"#SupportEachOther",
				"#CommunityOverCompetition",
				"#CrabBasketLessons",
				"#RiseTogether",
				"#Inspiration",
				"#MindsetMatters",
				"#Inspiration",
				"#Motivation",
				"#Change",
			],
			"content": `<p>During a beach stroll, a man encountered a captivating scene: a fisherman diligently collecting crabs in an open basket, surprisingly without a lid. Puzzled, the man questioned the fisherman about the absence of an escape attempt by the crabs. The fisherman, with a knowing smile, revealed a profound insight.</p>
				<p>He explained that if one crab were alone, it might venture to escape. However, the collective mentality of the crabs played a pivotal role. In their shared confinement, each crab ensured that none would break free. They preferred a collective demise over individual escape.</p>
				<p>As the man absorbed this metaphorical lesson, he reflected on its resonance of the &ldquo;Crab Mentality&rdquo; with human behaviour. When confronted by a collective mindset that leans towards demise, be the architect of your own destiny. Remain resolute in your Dreams and Visions.</p>
				<p>In the vast expanse of life, where the tides of influence can pull us in different directions, let this be a reminder to stay anchored to your aspirations. Don't succumb to the gravitational pull of group negativity; instead, leverage it to propel yourself toward success. Be the lone crab that defies the norm and emerges triumphant.</p>
				<p>In the grand tapestry of existence, where the lessons of the sea meet the complexities of the human spirit, let the crab basket on the beach be a symbol of empowerment and resilience. Embrace the wisdom of the shoreline and forge your path with determination, rising above the tide of conformity.</p>`
		},
		{
			"id": "you-dont-have-to-be-born-skilful-to-be-extra-ordinary-sanjo-mathew-motivational-blog",
			"title": "You don't have to be born skilful to be extra-ordinary.",
			"subTitle": "Echoes of Wisdom - Inspired by Life",
			"image": "you-dont-have-to-be-born-skilful-to-be-extra-ordinary.png",
			"authorId": "sanjomathew",
			"date": "01 Jan, 2024",
			"readTime": "3 min to Read",
			"tags": [
				"#BeExtraordinary", "#SkillsAreLearned", "#UnlockYourPotential", "#BelieveInYourself", "#GrowthMindset", "#OrdinaryToExtraordinary", "#SuccessIsEarned", "#DreamBig", "#SelfImprovement", "#AchieveGreatness", "#HardWorkPaysOff", "#Inspiration", "#MotivationMonday", "#NeverGiveUp", "#inspiration", "#motivation", "#change"
			],
			"content": `<p><b>A perspective from the skill of an Archerfish</b></p>
				<p>The archerfish stands out as an intriguing and distinctive aquatic species, distinguished by its unique hunting behavior. The archerfish is not born with the full skill of spitting jets of water accurately to catch prey; instead, it learns and refines this behaviour over time through observation and practice.</p>
				<p>Young archerfish typically learn how to spit water by imitating the older members of their group The archerfish's ability to shoot water jets with precision is a learned behaviour that improves with practice. It is the practice and experience that make them proficient marksmen. This learning process is crucial for their survival, as it enables them to effectively catch insects on overhanging vegetation above the water.</p>
				<p><b>The Key skills that Archerfish display are:</b></p>
				<p><b>Precision and Accuracy:<span>&nbsp;</span></b>The behavior of shooting down the insect with a jet of water, showcases precision, accuracy, and determination and can be seen as a symbol of focused goal-setting and achieving targets with accuracy.</p>
				<p><b>Adaptability :<span>&nbsp;</span></b>The adaptability of Archerfish serves as an inspiration for individuals facing challenges, encouraging them to find creative and effective solutions to overcome obstacles.</p>
				<p><b>Patience:<span>&nbsp;</span></b>Archerfish exhibit patience while waiting for the right moment to shoot down their prey. This quality can be a metaphor for the importance of patience in achieving goals and waiting for the right time to act.</p>
				<p><b>Resourcefulness:<span>&nbsp;</span></b>The archerfish's use of water as a tool for hunting displays resourcefulness. It can inspire individuals to make the most of the resources at their disposal, encouraging creativity and thinking outside the box.</p>
				<p><b>Teamwork:<span>&nbsp;</span></b>In some cases, archerfish hunt in groups, coordinating their efforts to increase their chances of success. This behavior can symbolize the importance of teamwork, collaboration, and mutual support in achieving common goals.</p>
				<p>The transformative power of effort and perseverance is remarkable for an Archerfish which is not innate but acquired through observation and practice, The message encourages individuals to recognize that greatness is not predetermined at birth. Instead, it is forged through dedication, resilience, and a continuous commitment to improvement. The archerfish, a master of precision in shooting water jets to catch prey, exemplifies the idea that skills are developed over time, with learning and adaptation playing crucial roles. This perspective challenges the notion of inherent talent, emphasizing the potential for anyone to achieve extraordinary feats through hard work, learning, and a steadfast pursuit of excellence. Just as the archerfish refines its hunting prowess through experience, individuals can shape their own greatness by embracing the journey of growth and skill development.</p>`
		},
		{
			"id": "dolphin-wisdom-navigating-life-s-waves-with-resilient-spirits-sanjo-mathew-motivational-blog",
			"title": "Dolphin Wisdom: Navigating Life's Waves with Resilient Spirits.",
			"subTitle": "Echoes of Wisdom - Inspired by Life",
			"image": "dolphin-wisdom-navigating-life-s-waves-with-resilient-spirits-sanjo-mathew-motivational-blog.png",
			"authorId": "sanjomathew",
			"date": "01 Jan, 2024",
			"readTime": "3 min to Read",
			"tags": [
				"#ResilientSpirits", "#OceanInspiration", "#RideTheWaves", "#StayResilient", "#LifeLessons", "#WisdomOfTheSea", "#EmbraceTheJourney", "#OceanLife", "#InnerStrength", "#PositiveMindset", "#OvercomeChallenges", "#NatureInspires", "#inspiration", "#motivation", "#growthmindset"
			],
			"content": `<p><b>Adaptability in Turbulent Waters:</b></p>
				<p>Dolphins, with their keen sense of adaptability, navigate changing ocean conditions with swiftness and ease. Humans, possessing capabilities beyond those of dolphins, should exhibit resilience to adapt to life's uncertainties. Learning from experiences and adjusting strategies when faced with challenges are essential facets of this adaptability.</p>
				<p><b>Echolocation of Inner Strength:</b></p>
				<p>Dolphins use echolocation to navigate and locate prey. In human resilience, individuals can cultivate inner strength and self-awareness, using their internal 'echolocation' to navigate personal challenges and find sources of strength.</p>
				<p><b>Social Support Pods:</b></p>
				<p>Dolphins often travel in social pods, providing support and protection. Humans who are resilient cultivate strong social networks, drawing on the support of friends, family, and community during times of hardship.</p>
				<p><b>Playfulness in Adversity:</b></p>
				<p>Dolphins exhibit playfulness even in challenging situations. Human resilience should be the one that involves maintaining a sense of playfulness or optimism, finding moments of joy amidst adversity, which can contribute to mental well-being.</p>
				<p><b>The Leap of Growth:</b></p>
				<p>Dolphins leap joyfully above the water. Resilient individuals embrace life's challenges as opportunities for growth, using setbacks as springboards to propel themselves forward towards personal and emotional development.</p>
				<p>"Dolphin Wisdom: Navigating Life's Waves with Resilient Spirits" encapsulates the idea that, like dolphins, humans can cultivate resilience by adapting, finding joy in adversity, seeking support, and riding the waves of life with grace and strength.</p>`
		},
		{
			"id": "the-rhythmic-persistence-of-a-snail-a-skill-to-master-in-every-profession",
			"title": "The Rhythmic Persistence of a Snail: A Skill to Master in Every Profession.",
			"subTitle": "Echoes of Wisdom - Inspired by Life",
			"image": "the-rhythmic-persistence-of-a-snail-a-skill-to-master-in-every-profession-sanjo-mathew-motivational-blog.png",
			"authorId": "sanjomathew",
			"date": "01 Jan, 2024",
			"readTime": "3 min to Read",
			"tags": [
				"#SnailWisdom", "#RhythmicPersistence", "#MasterYourSkills", "#SlowAndSteady", "#PatienceAndPersistence", "#ProfessionalGrowth", "#LifeLessons", "#EmbraceTheJourney", "#SkillMastery", "#ConsistencyIsKey", "#WorkHard", "#SuccessMindset", "#KeepPushing", "#CareerDevelopment", "#Persevere", "#InnerStrength", "#inspiration", "#motivation", "#growthmindset"
			],
			"content": `<p><b>Adaptability in Turbulent Waters:</b></p>
				<p>Dolphins, with their keen sense of adaptability, navigate changing ocean conditions with swiftness and ease. Humans, possessing capabilities beyond those of dolphins, should exhibit resilience to adapt to life's uncertainties. Learning from experiences and adjusting strategies when faced with challenges are essential facets of this adaptability.</p>
				<p><b>Echolocation of Inner Strength:</b></p>
				<p>Dolphins use echolocation to navigate and locate prey. In human resilience, individuals can cultivate inner strength and self-awareness, using their internal 'echolocation' to navigate personal challenges and find sources of strength.</p>
				<p><b>Social Support Pods:</b></p>
				<p>Dolphins often travel in social pods, providing support and protection. Humans who are resilient cultivate strong social networks, drawing on the support of friends, family, and community during times of hardship.</p>
				<p><b>Playfulness in Adversity:</b></p>
				<p>Dolphins exhibit playfulness even in challenging situations. Human resilience should be the one that involves maintaining a sense of playfulness or optimism, finding moments of joy amidst adversity, which can contribute to mental well-being.</p>
				<p><b>The Leap of Growth:</b></p>
				<p>Dolphins leap joyfully above the water. Resilient individuals embrace life's challenges as opportunities for growth, using setbacks as springboards to propel themselves forward towards personal and emotional development.</p>
				<p>"Dolphin Wisdom: Navigating Life's Waves with Resilient Spirits" encapsulates the idea that, like dolphins, humans can cultivate resilience by adapting, finding joy in adversity, seeking support, and riding the waves of life with grace and strength.</p>`
		},
		{
			"id": "the-winning-streak-the-power-of-pushing-beyond-limits",
			"title": "The Winning Streak: The Power of Pushing Beyond Limits.",
			"subTitle": "Echoes of Wisdom - Inspired by Life",
			"image": "the-winning-streak-the-power-of-pushing-beyond-limits-sanjo-mathew-motivational-blog.jpg",
			"authorId": "sanjomathew",
			"date": "01 Jan, 2024",
			"readTime": "2 min to Read",
			"tags": [
				"#WinningStreak", "#PushBeyondLimits", "#PowerOfPersistence", "#BreakBarriers", "#Unstoppable", "#ChaseGreatness", "#GoTheExtraMile", "#NoLimits", "#SuccessMindset", "#AchievementUnlocked", "#StayDetermined", "#RiseAbove", "#Perseverance", "#DrivenToSucceed", "#WinningMindset", "#motivation", "#inspiration", "#success", "#challenge"
			],
			"content": `<p>Entering a gym as an overweight individual was daunting. Each visit felt like a monumental effort, but with the guidance of my dedicated trainer, I began taking small, manageable steps that gradually led to significant progress. The most inspiring moment came when I noticed a group of gym members training for a mini-marathon. Marathons had always seemed out of reach, especially since I never considered myself an athlete.</p>
				<p>However, when I was invited to participate in the upcoming race, I decided to take the plunge and register. Completing the 5 km race took me 55 minutes, and the aftermath left me with sore feet for a month. Despite the physical challenges, the feeling of receiving a finisher's medal was incredibly motivating. It spurred me to continue running, and I eagerly signed up for the next race, and then another.</p>
				<p>This journey taught me that you don't have to start as an athlete to achieve great things. The key is to challenge your beliefs and push yourself beyond perceived limits. What once seemed impossible became a piece of cake once I overcame the mental barriers. The real question is, are you willing to push yourself to see what more you can accomplish? It's all in your mind&mdash;once you decide to try, you'll discover a world of possibilities.</p>`
		},
		{
			"id": "embracing-adversity-choosing-your-response-sanjo-mathew-motivational-blog",
			"title": "Embracing Adversity: Choosing Your Response - Potato, Egg, or Coffee?",
			"subTitle": "Embrace Series",
			"image": "embracing-adversity-choosing-your-response-sanjo-mathew-motivational-blog.png",
			"authorId": "sanjomathew",
			"date": "01 Jan, 2024",
			"readTime": "3 min to Read",
			"tags": [
				"#EmbraceChange", "#Embraceimperfection", "#AuthenticSelf", " #BeYou", " #RealLife", " #InspiringJourney", " #SelfLove", " #BeautifullyHuman", " #CelebrateDifferences", " #LifeUnfiltered", "#UniqueAndProud", "#psychologythoughts", "#life"
			],
			"content": `<p>Life is a series of challenges, and adversity is an inevitable part of the journey. When faced with difficult situations, our responses can be compared to the transformative processes of a potato, an egg, or coffee beans. Each metaphor symbolizes a unique approach to adversity, reflecting qualities of resilience, strength, or the ability to spread positivity.</p>
			<p><b>The Potato Approach:</b><span>&nbsp;</span>Imagine yourself as a potato when adversity strikes. Potatoes become soft and malleable when exposed to heat or pressure. Similarly, embracing challenges with an open and adaptable mindset allows us to navigate difficulties with resilience. The potato teaches us that flexibility and a willingness to change can lead to personal growth and strength in the face of adversity.</p>
			<p><b>The Egg Philosophy:<span>&nbsp;</span></b>Contrastingly, an egg becomes hard-boiled when subjected to heat. If you choose to face adversity as an egg, your response may involve toughening up and developing a thicker shell. While this approach can provide protection, it's essential to balance resilience with an open heart. Becoming too rigid may lead to emotional detachment, hindering personal development and growth.</p>
			<p><b>Brewing Resilience Like Coffee:</b>Consider the aromatic coffee beans that transform into a delightful beverage when exposed to hot water. Embracing adversity as if you were a coffee bean involves using challenges as opportunities for personal development. Just as coffee beans spread their aroma, facing difficulties with a positive mindset can inspire those around you. This approach encourages resilience, learning, and the ability to create something valuable out of challenging circumstances.</p>
			<p><b>Conclusion:<span>&nbsp;</span></b>Life's challenges are inevitable, but our responses to adversity shape our character and define our journey. Whether you choose to be like a flexible potato, a resilient egg, or a transformative coffee bean, the key is to find a balance that fosters personal growth and positivity. By understanding the unique qualities of each metaphor, you can navigate adversity with grace, turning challenges into opportunities for self-discovery and empowerment.</p>`
		},
		{
			"id": "embrace-change-the-transformative-perspectives-sanjo-mathew-motivational-blog",
			"title": "Embrace Change: The Transformative Perspectives",
			"subTitle": "Embrace Series",
			"image": "embrace-change-the-transformative-perspectives-sanjo-mathew-motivational-blog.png",
			"authorId": "sanjomathew",
			"date": "01 Jan, 2024",
			"readTime": "3 min to Read",
			"tags": [
				"#EmbraceChange", "#TransformationJourney", "#PsychologyThoughts", "#life", "#womenempowerment", "#stressrelief", "#happiness", "#changemanagement", "#Motivation", "#Resilience", "#Metamorphosis"
			],
			"content": `<p>In the journey of life, change is the golden thread that shapes us in ways we never imagined. It challenges us to face our fears, let go of the familiar, and trust in the process of transformation.</p>
			<p>Imagine a caterpillar inching along leaves, seeing only the ground and knowing nothing of the sky. It can't fathom the freedom of flight or the beauty beyond its current state. Yet, within this simple creature, a quiet revolution begins. The caterpillar enters a cocoon, undergoing a profound and painful transformation. It dissolves into a chaotic mix of potential, only to emerge as a butterfly, ready to embrace the sky.</p>
			<p>When we encounter change, we often feel like the caterpillar, holding onto what we know and fearing the unknown. Change can be an unrestrained journey, filled with moments of doubt and fear. But it's through this struggle that we find our wings. Just as the caterpillar must leave behind its old self, we too must shed outdated beliefs, habits, and comforts to realize our full potential.</p>
			<p>This journey teaches us that change isn't something to fear but to celebrate. It's the force that helps us evolve, adapt, and become the best versions of ourselves. It builds resilience, sparks creativity, and encourages us to explore. By embracing change, we open the door to new experiences, fresh perspectives, and a deeper understanding of ourselves and the world around us.</p>`
		},
		{
			"id": "embracing-imperfection-the-power-of-authenticity-sanjo-mathew-motivational-blog",
			"title": "Embracing Imperfection: The Power of Authenticity",
			"subTitle": "Embrace Series",
			"image": "embracing-imperfection-the-power-of-authenticity-sanjo-mathew-motivational-blog.png",
			"authorId": "sanjomathew",
			"date": "01 Jan, 2024",
			"readTime": "3 min to Read",
			"tags": [
				"#EmbraceChange", "#Embraceimperfection", "#Perfectlyimperfect", "#AuthenticSelf", "#BeYou", "#RealLife", "#InspiringJourney", "#SelfLove", "#BeautifullyHuman", "#CelebrateDifferences", "#LifeUnfiltered", "#UniqueAndProud"
			],
			"content": `<p>In the vast and varied world of nature, there exists a creature that embodies the beauty of imperfection and the power of authenticity&mdash;the blobfish. This deep-sea dweller, often dubbed the "world's ugliest animal," has a gelatinous, formless appearance. The blobfish lives in the deep ocean, where the pressure is incredibly high. At these depths, most creatures have dense, muscular bodies to withstand the pressure. However, the blobfish has evolved differently. Its soft, gelatinous body, devoid of muscles and bones, is perfectly suited for its deep-sea habitat. The lack of density allows it to float just above the ocean floor, effortlessly conserving energy in an environment where food is scarce.</p>
				<p>The blobfish's "ugliness" is not a flaw; it is a testament to the creature's unique adaptation and resilience. It doesn't conform to typical standards of beauty or functionality, yet it thrives in its niche. The blobfish's existence challenges us to rethink our perceptions of beauty, worth, and success. It teaches us that true beauty lies not in conforming to societal norms but in embracing our unique qualities and strengths.</p>
				<p>&nbsp;Imperfection can be a source of strength. When we accept our imperfections, we allow ourselves to be vulnerable and genuine. This authenticity fosters deeper connections with others, as people are drawn to honesty and sincerity. By being true to ourselves, we inspire others to do the same, creating a more inclusive and accepting world. Let us honour our imperfections, for they are the essence of who we are, and in doing so, we unlock the power of true authenticity.</p>`
		},
		{
			"id": "embracing-uncertainty-learn-to-soar-like-an-albatross-sanjo-mathew-motivational-blog",
			"title": "Embracing Uncertainty: Learn to Soar Like an Albatross",
			"subTitle": "Embrace Series",
			"image": "embracing-uncertainty-learn-to-soar-like-an-albatross-sanjo-mathew-motivational-blog.png",
			"authorId": "sanjomathew",
			"date": "01 Jan, 2024",
			"readTime": "3 min to Read",
			"tags": [
				"#EmbraceChange", "#happiness", "#life", "#friends", "#positivevibes", "#education", "#PsychologyThoughts", "#positivity", "#positivethinking"
			],
			"content": `<p>The albatross is a magnificent seabird, known for navigating vast, open oceans, often flying thousands of miles over unpredictable and harsh seas. With wingspans up to 11 feet, these birds glide effortlessly over the waves, spending months at sea without land in sight. The ocean's ever-changing environment, with its sudden weather shifts, doesn't stop the albatross. Instead, it thrives, embracing uncertainty and trusting in its instincts to navigate the vast and often turbulent waters.</p>
				<p>This majestic bird's life is a testament to adaptability and resilience, proving that facing uncertainty head-on can lead to incredible journeys and discoveries. Like the albatross, we can embrace uncertainty by trusting in our abilities and staying open to the unknown. By doing so, we learn to navigate life's unpredictable winds, finding strength and freedom in the journey. The albatross teaches us that, while the future may be uncertain, embracing it with grace and confidence allows us to soar to new heights.</p>`
		},
		{
			"id": "embrace-lifes-transitions-learning-from-the-oyster-sanjo-mathew-motivational-blog",
			"title": "Embrace Life's Transitions: Learning from the Oyster",
			"subTitle": "Embrace Series",
			"image": "embrace-lifes-transitions-learning-from-the-oyster-sanjo-mathew-motivational-blog.png",
			"authorId": "sanjomathew",
			"date": "01 Jan, 2024",
			"readTime": "3 min to Read",
			"tags": [
				"#EmbraceChange", "#happiness", "#life", "#friends", "#positivevibes", "#education", "#PsychologyThoughts", "#positivity", "#positivethinking"
			],
			"content": `<p>The oyster, despite its simple appearance, undergoes significant transformations, adapting to its environment and even turning irritants into pearls.</p>
				<ol>
				<li><strong>Settling and Adapting</strong>: When an oyster larva settles on a suitable surface, it begins to build its shell, adapting to its surroundings. This can represent our initial stages in new environments, where we lay the foundation for growth and stability.</li>
				<li><strong>Facing Irritants</strong>: Over time, sand or other irritants may enter the oyster's shell. Instead of rejecting these challenges, the oyster secretes layers of nacre around the irritant, eventually forming a pearl. This process symbolizes how we can turn life's challenges and irritants into valuable experiences, transforming difficulties into strengths.</li>
				<li><strong>Continuous Growth</strong>: The oyster continuously builds and expands its shell to accommodate growth. This ongoing process is akin to our own need to evolve, expand our horizons, and adapt to new circumstances as we progress through life.</li>
				</ol>
				<p>The oyster teaches us that life's transitions, though sometimes uncomfortable or challenging, are opportunities for growth and transformation. By embracing these changes and learning to adapt, we can turn the irritants of life into pearls of wisdom and strength, emerging more resilient and enriched by our experiences.</p>`
		},
		{
			"id": "embracing-diversity-learning-from-the-octopus-sanjo-mathew-motivational-blog",
			"title": "Embracing Diversity: Learning from the Octopus",
			"subTitle": "Embrace Series",
			"image": "embracing-diversity-learning-from-the-octopus-sanjo-mathew-motivational-blog.png",
			"authorId": "sanjomathew",
			"date": "01 Jan, 2024",
			"readTime": "3 min to Read",
			"tags": [
				"#EmbraceChange", "#lifequotes", "#life", "#psychologythoughts", "#positivity", "#happiness", "#education"
			],
			"content": `<p>The octopus, one of the most intelligent and adaptable creatures in the ocean, offers a powerful analogy for embracing diversity. With its remarkable ability to change colour, texture, and even shape, the octopus thrives in a wide range of environments by adapting to its surroundings.</p>
				<ol>
				<li><strong>Camouflage and Adaptation</strong>: The octopus can blend into various environments, altering its appearance to match different colours, patterns, and textures. This ability to adapt symbolizes how embracing diversity&mdash;whether in people, ideas, or cultures&mdash;enables us to thrive in different situations and environments. Just as the octopus uses its adaptability for survival, we too can benefit from being open to and accepting of differences.</li>
				<li><strong>Intelligence and Problem-Solving</strong>: Octopuses are known for their high intelligence and problem-solving abilities, often using creative methods to navigate challenges. This reflects the value of diverse perspectives in problem-solving and innovation. When we embrace diversity, we gain access to a wider range of ideas and solutions, enhancing our ability to overcome obstacles and succeed.</li>
				<li><strong>Eight Limbs, One Purpose</strong>: The octopus's eight arms work independently yet in coordination to achieve its goals. This represents the strength of unity in diversity&mdash;different parts working together harmoniously. Each arm has its own function, yet all contribute to the overall well-being of the creature. In the same way, embracing diverse talents and perspectives within a team or community leads to greater collective success.</li>
				</ol>
				<p>The octopus teaches us that diversity is not just something to be accepted, but something to be celebrated. By embracing differences and adapting to new perspectives, we enhance our ability to navigate life's complexities with creativity and resilience. Diversity, like the octopus's adaptability, is a key to thriving in an ever-changing world.</p>`
		},
		{
			"id": "embracing-self-love-a-learning-from-the-sea-otter-sanjo-mathew-motivational-blog",
			"title": "Embracing Self-Love: A Learning from the Sea Otter",
			"subTitle": "Embrace Series",
			"image": "embracing-self-love-a-learning-from-the-sea-otter-sanjo-mathew-motivational-blog.png",
			"authorId": "sanjomathew",
			"date": "01 Jan, 2024",
			"readTime": "3 min to Read",
			"tags": [
				"#SelfLove", "#psychologythoughts", "#EmbraceChange", "#happiness", "#life", "#friends", "#positivevibes", "#education", "#PsychologyThoughts", "#positivity", "#positivethinking"
			],
			"content": `<h3><span style="font-size: 12.0pt; font-weight: normal;">In the vast, cold waters of the Pacific Ocean, where temperatures often plunge to bone-chilling levels, the sea otter thrives not just by instinct but by embodying a delicate balance of self-care and connection. This seemingly simple creature, with its playful demeanour and endearing habits, offers profound lessons on the importance of self-love&mdash;lessons that resonate deeply with our own journey toward inner peace and happiness.<o:p></o:p></span></h3>
				<h4><span >The Power of Self-Care<o:p></o:p></span></h4>
				<p>Sea otters are unique among marine mammals in that they rely on their thick fur, rather than a layer of blubber, to keep warm in the frigid ocean waters. This fur, among the densest in the animal kingdom, requires meticulous care to function effectively. Sea otters spend hours each day floating on their backs, diligently grooming their fur to ensure it remains clean, fluffed, and capable of trapping air for insulation- it is a critical survival skill. The sea otter&rsquo;s grooming mirrors the importance of self-care in our own lives. Just as the otter must maintain its fur to stay warm, we must nurture our minds, bodies, and spirits to maintain our well-being in the face of life&rsquo;s challenges.<o:p></o:p></p>
				<p>Like the sea otter, we thrive when we prioritize our well-being, ensuring that we are equipped to face whatever life may bring.<o:p></o:p></p>
				<h4><span>The Importance of Connection<o:p></o:p></span></h4>
				<p>While self-care is essential, the sea otter also teaches us that self-love does not exist in isolation. These animals are known for their charming habit of holding hands (or paws) with one another while they sleep, forming what is known as a "raft." By holding onto one another, the otters ensure that they don&rsquo;t drift apart during the night, carried away by the ocean currents.<o:p></o:p></p>
				<p>This simple act of connection carries a powerful message for us. Self-love isn&rsquo;t about shutting out the world or focusing solely on ourselves. Instead, it involves maintaining meaningful connections with others while also honouring our own needs. Just as the sea otter holds onto its companions for security, we too can find strength and support in our relationships. <o:p></o:p></p>
				<h4><span >Building a Foundation for Inner Peace and Happiness<o:p></o:p></span></h4>
				<p>Self-love is the foundation upon which we build inner peace and happiness. It&rsquo;s the recognition that we deserve care and attention, and that by nurturing ourselves, we become better equipped to navigate life&rsquo;s currents. By caring for ourselves as diligently as the sea otter tends to its fur, and by holding onto our connections as firmly as the otter holds hands with its kin, we lay the groundwork for a life filled with peace, happiness, and resilience.<o:p></o:p></p>
				<p>As you move forward on your journey, take a moment to reflect on the sea otter&rsquo;s wisdom. Embrace self-love. In doing so, you will discover the true power of self-love&mdash;a power that sustains and uplifts, no matter what challenges come your way.<o:p></o:p></p>`
		},
		{
			"id": "courageous-beginnings-success-isnt-a-destination-its-the-courage-to-start-the-journey-sanjo-mathew-motivational-blog",
			"title": "Courageous Beginnings: Success Isn't a Destination, It's the Courage to Start the Journey",
			"subTitle": "Redefining Success Series",
			"image": "courageous-beginnings-success-isnt-a-destination-its-the-courage-to-start-the-journey-sanjo-mathew-motivational-blog.png",
			"authorId": "sanjomathew",
			"date": "01 Jan, 2024",
			"readTime": "3 min to Read",
			"tags": [
				"#RedefineSuccess", "#CourageousBeginnings", "#StartWithCourage", "#NewBeginnings", "#BoldMoves", "#SuccessRedefined", "#EmbraceChange", "#BraveSteps", "#FearlessJourney", "#CourageToBegin", "#SuccessMindset", "#RiseAboveFear", "#DareToStart", "#TransformYourLife", "#CourageAndConfidence"
			],
			"content": `In a world obsessed with outcomes, it’s easy to forget that success is not merely a destination; it’s the courage to embark on a journey, often filled with uncertainty. Every great achievement begins with a first step, and it is that step—the decision to start—that defines the true spirit of success.
				Consider the story of J.K. Rowling, who faced rejection from 12 publishers before the Harry Potter series found its home at Bloomsbury. It wasn’t the global phenomenon that defines her success, but rather the courage to keep writing, submitting, and believing in her work. Her journey exemplifies the resilience needed to embrace the unknown and push through the fear of failure.
				Similarly, in the tech world, Steve Jobs was ousted from Apple, the very company he co-founded. Instead of retreating, he ventured into new territories, founding NeXT and acquiring Pixar. His willingness to start again, despite setbacks, eventually led him back to Apple, where he drove the company to unprecedented heights. Jobs' story is a testament to the idea that success is about the willingness to start over, to innovate, and to continue moving forward, regardless of the obstacles.
				For many, the hardest part of any journey is taking that first step. Whether it's launching a new business, pursuing further education, or starting a personal project, the initial act of beginning is often met with doubt and fear. Yet, as history shows, those who dare to start—despite the uncertainties—are the ones who shape their destinies.
				In our own professional lives, it's crucial to remember that success is not a static goal, but an evolving process. It’s not about where we end up, but how we begin, persevere, and grow along the way. The courage to start is what truly defines our success. So, what’s stopping you from taking that first step today? Embrace the journey, and let courage be your guide.
				`
		},
		{
			"id": "success-is-finding-joy-in-the-process-not-just-the-outcomey-sanjo-mathew-motivational-blog",
			"title": "Success is finding joy in the process,not just the outcome",
			"subTitle": "Redefining Success Series",
			"image": "success-is-finding-joy-in-the-process-not-just-the-outcomey-sanjo-mathew-motivational-blog.png",
			"authorId": "sanjomathew",
			"date": "01 Jan, 2024",
			"readTime": "3 min to Read",
			"tags": [
				"#TransformYourLife", "#SuccessMinds", "#CourageAndConfidence", "#Resilience", "#dedication", "#GrowthMindset", "#NeverGiveUp", "#Inspiration", "#motivation", "#PursueYourPassion", "#Leadership", "#ProfessionalGrowth", "#EmbraceTheChallenge"
			],
			"content": `<p>Success is often perceived as the final outcome, but in reality, it is a continuous process defined by dedication, resilience, and the ability to find fulfilment in the journey itself.</p>
			<p>Consider Michael Jordan, one of the most celebrated athletes in sports history. Early in his life, Jordan faced repeated rejections due to his short height. As he developed into a formidable basketball player, he encountered further challenges&mdash;missing over nine thousand shots and losing more than three hundred games. However, it was his relentless commitment to the process, coupled with an unyielding drive to improve, that ultimately paved his way to greatness. Jordan&rsquo;s success was not solely about winning; it was about his ability to learn from every setback and persist through every challenge.</p>
			<p>Steven Spielberg&rsquo;s story echoes a similar narrative. Despite being one of the most influential filmmakers of our time, Spielberg faced significant obstacles on his path to success. Struggling academically, he was suspended three times from the University of Southern California. Yet, Spielberg&rsquo;s passion for filmmaking remained undeterred. He turned his challenges into opportunities for growth, which eventually led to the creation of fifty-one acclaimed films and three Academy Awards. Spielberg&rsquo;s journey exemplifies that true success lies in the relentless pursuit of one&rsquo;s passion and the willingness to embrace failures as stepping stones.</p>
			<p>These examples illustrate that success is not a singular achievement but a cumulative result of perseverance, continuous learning, and an unwavering commitment to one&rsquo;s goals. It is about finding satisfaction in the process, staying resilient in the face of adversity, and remaining dedicated to personal and professional growth.</p>
			<p>In the professional world, this mindset is crucial. Success is not just about reaching a goal but about the continuous effort to refine our skills, adapt to new challenges, and persist in our endeavours. It&rsquo;s this dedication to the process that ultimately leads to meaningful and lasting success.</p>
				`
		},
		{
			"id": "success-is-living-authentically-true-to-who-you-are-sanjo-mathew-motivational-blog",
			"title": "Success is Living Authentically, True to Who You Are",
			"subTitle": "Redefining Success Series",
			"image": "success-is-living-authentically-true-to-who-you-are-sanjo-mathew-motivational-blog.jpg",
			"authorId": "sanjomathew",
			"date": "01 Jan, 2024",
			"readTime": "3 min to Read",
			"tags": [
				"#BeYou", "#Resilience", "#Authenticity", "#Inspiration", "#SelfGrowth", "#AuthenticSuccess", "#liveyourtruth💯", "#SuccessMindset", "#TrueSuccess", "#dedication", "#Empowerment", "#GrowthMindset", "#NeverGiveUp", "#Inspiration", "#motivation", "#PursueYourPassion", "#Leadership", "#PurposeDriven", "#ProfessionalGrowth", "#EmbraceTheChallenge", "#SuccessMinds", "#LiveAuthentically"
			],
			"content": `<p>In today&rsquo;s fast-paced world, where success is often measured by external achievements&mdash;titles, wealth, or social status&mdash;it&rsquo;s easy to lose sight of what truly matters: living authentically. True success isn&rsquo;t just about reaching the top; it&rsquo;s about staying true to who you are, no matter where life takes you.<o:p></o:p></p>
				<h4><span lang="EN-US">The Pressure to Conform<o:p></o:p></span></h4>
				<p>We live in a society that constantly pushes us to conform to predefined standards of success. From an early age, we&rsquo;re taught that success looks a certain way&mdash;graduate from a prestigious university, land a high-paying job, climb the corporate ladder. While these milestones are admirable, they aren&rsquo;t the only markers of success.<o:p></o:p></p>
				<p>Sarah, my colleague was, a marketing executive who spent years chasing promotions and accolades. On paper, she was the epitome of success. But deep down, she felt unfulfilled. Sarah realized that her passion lay not in corporate achievements but in helping others through non-profit work. It wasn&rsquo;t an easy decision to leave behind a worthwhile career, but when she did, she found a profound sense of purpose and happiness. For Sarah, success was living a life aligned with her values, not just her bank account.<o:p></o:p></p>
				<h4><span lang="EN-US">The Power of Authenticity<o:p></o:p></span></h4>
				<p>Living authentically means embracing your true self, even when it goes against the grain. It requires the courage to define success on your own terms and the resilience to pursue it, despite external pressures.<o:p></o:p></p>
				<h4><span lang="EN-US">The Journey to Authentic Success<o:p></o:p></span></h4>
				<p>The journey to authentic success is not always straightforward. It often involves difficult choices, sacrifices, and the willingness to be vulnerable. But the rewards are immense. When you live authentically, you not only find personal satisfaction, but you also inspire others to do the same.<o:p></o:p></p>
				<h4><span lang="EN-US">Embrace Your True Self<o:p></o:p></span></h4>
				<p>As you reflect on your own journey, ask yourself: Are you living authentically? Are your actions and decisions aligned with your true self? Success is not a one-size-fits-all concept. It&rsquo;s about finding what makes you happy and fulfilled and having the courage to pursue it, even when it defies conventional wisdom.<o:p></o:p></p>
				<p>In the end, success is not about the accolades or the applause; it&rsquo;s about the quiet satisfaction of knowing that you are living a life that is true to who you are. Embrace your authenticity, and let it guide you toward a life of genuine success. The most meaningful success is the one that resonates with your true self.<o:p></o:p></p>
				`
		},
		{
			"id": "freedom-mindset-true-freedom-and-success-bloom-from-hope-exploration-and-curiosity",
			"title": "Freedom mindset: True freedom and success bloom from hope, exploration, and curiosity.",
			"subTitle": "Redefining Success Series",
			"image": "freedom-mindset-true-freedom-and-success-bloom-from-hope,-exploration,-and-curiosity.png",
			"authorId": "sanjomathew",
			"date": "01 Jan, 2024",
			"readTime": "2 min to Read",
			"tags": [
				"#FreedomAndSuccess", "#CuriosityUnleashed", "#ExploreYourself", "#HopefulLiving", "#EmbraceTheJourney", "#AuthenticSuccess", "#StayCurious", "#LiveWithPurpose", "#WanderAndGrow", "#Inspiration", "#GrowthMindset", "#AdventureAwaits", "#DreamChaser", "#MindfulLiving", "#ExploreToGrow"
			],
			"content": `<p>In the realm of professional and personal growth, the concept of success transcends mere achievements. True success is deeply intertwined with a mindset of freedom, driven by hope, exploration, and curiosity. This perspective can transform our approach to challenges and opportunities, offering profound insights from history&rsquo;s most influential leaders.</p>
				<p>Mahatma Gandhi&rsquo;s leadership in the Indian independence movement exemplified how a freedom-oriented mindset can drive monumental change. Gandhi&rsquo;s unwavering hope for a free India and his commitment to nonviolent resistance showcased the power of curiosity and exploration in addressing complex social issues. His ability to envision a united nation, despite tremendous adversity, redefined not only the future of India but also the global understanding of leadership and resilience.</p>
				<p>Similarly, Dr. B.R. Ambedkar&rsquo;s contributions to shaping India&rsquo;s constitution highlight the impact of exploration and curiosity. Ambedkar&rsquo;s relentless pursuit of social justice and equality, despite facing systemic challenges, underscores how a mindset of freedom and a quest for knowledge can lead to ground-breaking reforms. His work transformed Indian society and laid the foundation for a more inclusive and equitable nation.</p>
				<p>In the modern professional landscape, adopting this mindset can lead to extraordinary outcomes. Consider N. R. Narayana Murthy, co-founder of Infosys. Murthy&rsquo;s vision and commitment to innovation, combined with a curiosity to explore new technological frontiers, propelled Infosys from a small startup to a global IT giant. His approach reflects how hope and a freedom-oriented mindset can drive both personal and organizational success.</p>
				<p>Embracing these principles in our careers means more than setting targets; it involves fostering an environment where exploration is encouraged, challenges are seen as opportunities, and setbacks are viewed as lessons. As we navigate our professional journeys, let us draw inspiration from these leaders and remember that true success is a continuous journey shaped by freedom, hope, exploration, and curiosity.</p>`
		},
		{
			"id": "dream-clarity-the-foundation-of-success-sanjo-mathew-motivational-blog",
			"title": "Dream Clarity: The Foundation of Success",
			"subTitle": "Redefining Success Series",
			"image": "dream-clarity-the-foundation-of-success-sanjo-mathew-motivational-blog.png",
			"authorId": "sanjomathew",
			"date": "01 Jan, 2024",
			"readTime": "2 min to Read",
			"tags": [
				"#DreamClarity", "#VisionAndPurpose", "#ChaseYourDreams", "#ClearVision", "#FocusedGoals", "#ManifestYourDreams", "#PurposeDrivenLife", "#AlignWithYourDreams", "#DreamBigActBold", "#SuccessMindset", "#ClarityIsKey", "#AchieveYourGoals", "#LiveYourVision"
			],
			"content": `<p><strong>Success begins with a dream, but it&rsquo;s the clarity of that dream that turns it into reality</strong></p>
				<p>Without clear goals, even the most passionate pursuits can become unfocused and scattered. Dream clarity allows you to see not just the destination, but also the path to get there.</p>
				<p>Elon Musk, didn&rsquo;t just dream of building electric cars&mdash;he had a clear vision of transforming the automotive industry and reducing the world's dependence on fossil fuels. This clarity allowed him to create Tesla, a company that has revolutionized clean energy and transportation. Musk&rsquo;s focused dream drove his actions, overcoming multiple obstacles and naysayers along the way.</p>
				<p>Oprah Winfrey&rsquo;s dream wasn&rsquo;t just about being on television; her goal was to uplift and inspire people through meaningful storytelling. Her dream had a defined purpose, which gave her the clarity to shape her career and build an empire. By focusing on this singular mission, Oprah has become one of the most influential figures globally, and her success stems from staying true to that clear vision.</p>
				<p>Dream clarity not only sets direction but also inspires action. When your dream is well-defined, each step becomes more purposeful, and obstacles become challenges you are equipped to overcome.</p>
				<p>In conclusion, having a dream is essential, but having a clear vision of that dream is what drives true success. Clarity provides focus, purpose, and a roadmap to turn your vision into reality.</p>`
		},
		{
			"id": "balance-and-boundaries-sanjo-mathew-motivational-blog",
			"title": "Balance & Boundaries",
			"subTitle": "Redefining Success Series",
			"image": "balance-and-boundaries-sanjo-mathew-motivational-blog.png",
			"authorId": "sanjomathew",
			"date": "01 Jan, 2024",
			"readTime": "2 min to Read",
			"tags": [
				"#BalanceAndBoundaries", "#EmpoweredLiving", "#WellnessAndSuccess", "#ThriveNotSurvive", "#SuccessMindset", "#BoundariesMatter", "#SustainableSuccess", "#WellBeingFirst", "#LiveAuthentically", "#FlourishWithBalance"

			],
			"content": `<p><strong>True Success Flourishes with Balance and Empowered Boundaries</strong></p>
				<p>In a world that glorifies hustle, true success comes from balance and empowered boundaries. Without balance, burnout is inevitable; without boundaries, success can cost your well-being and relationships. Empowered boundaries are intentional limits that protect your time, energy, and mental health. They allow you to thrive, maintain control, and align your personal and professional lives with your core values. These boundaries stem from strength and self-awareness, ensuring sustainable success without sacrificing what matters most.</p>
				<p>Arianna Huffington, founder of The Huffington Post, was once a proponent of relentless work until she collapsed from exhaustion. It was a wake-up call that led her to re-evaluate her definition of success. She realized that without balance, her health and happiness would always be compromised. Arianna later started Thrive Global, a company focused on well-being and performance, becoming a global advocate for redefining success through rest, balance, and self-care.</p>
				<p>Sheryl Sandberg, COO of Facebook, has openly discussed the importance of setting boundaries in her professional life. Despite her demanding role, she makes it a point to leave the office by 5:30 PM to have dinner with her children. This boundary not only protects her family time but reinforces her belief that personal well-being is essential for sustainable success.</p>
				<p>On a smaller scale, freelancers and entrepreneurs often struggle with work-life balance. Many succeed only after learning to say "no" to unmanageable workloads or clients who don't align with their values. By setting boundaries, they protect their energy and focus, ensuring they can deliver their best work without sacrificing personal well-being.</p>
				<p>Success isn&rsquo;t about running yourself into the ground. It&rsquo;s about thriving&mdash;flourishing in your career while maintaining a healthy balance and the power to set boundaries that honour your personal values and needs.<strong> &ldquo;Flourish by Balancing Ambition with Empowered Boundaries"</strong></p>`
		},
	],
	"sections": {
		"editorsPick": {
			"postId": "crab-basket-mentality-sanjo-mathew-motivational-blog"
		},
		"trendingPosts": [
			"crab-basket-mentality-sanjo-mathew-motivational-blog",
			"freedom-mindset-true-freedom-and-success-bloom-from-hope-exploration-and-curiosity",
			"dolphin-wisdom-navigating-life-s-waves-with-resilient-spirits-sanjo-mathew-motivational-blog"
		],
		"popularPost": {
			"postId": "crab-basket-mentality-sanjo-mathew-motivational-blog"
		},
		"recentPosts": [
			"crab-basket-mentality-sanjo-mathew-motivational-blog"
		]
	}
}

function loadContent() {
	const currentPage = window.location.pathname.split("/").pop().split(".")[0];
	const urlParams = new URLSearchParams(window.location.search);
	console.log(currentPage);
	if (currentPage === 'index' || currentPage === '') {
		document.getElementById("tags").innerHTML = `
		${data.tags.map((tag) => tag.showInHome === true ?
			`<li class="list-inline-item"><a href="tags.html?tag=${tag.title.replace("#", "")}">${tag.title}</a></li>` : ""
		).join('')}
		`;

		const editorsPickPost = data.posts.find((post) => post.id === data.sections.editorsPick.postId);
		document.getElementById("editors-pick").innerHTML = `
          <div class="post-slider slider-sm">
            <img src="images/post/${editorsPickPost.image}" class="card-img-top" alt="${editorsPickPost.title}">
          </div>
          
          <div class="card-body">
            <h3 class="h4 mb-3"><a class="post-title" href="post-details.html?blogId=${editorsPickPost.id}">${editorsPickPost.title}</a></h3>
            <ul class="card-meta list-inline">
              <li class="list-inline-item">
                <a href="author-single.html" class="card-meta-author">
                  <img src="${data.author.photo}">
                   <span>${data.author.shortName}</span>
                </a>
              </li>
              <li class="list-inline-item">
                 <i class="ti-timer"></i>${editorsPickPost.readTime}
              </li>
              <li class="list-inline-item">
                <i class="ti-calendar"></i>${editorsPickPost.date}
              </li>
              <li class="list-inline-item">
                <ul class="card-meta-tag list-inline">
                  ${editorsPickPost.tags.slice(0, 4).map((tag) =>
			`<li class="list-inline-item"><a href="tags.html?tag=${tag.replace("#", "")}">${tag}</a></li>`
		).join('')}
                </ul>
              </li>
            </ul>
            <p>   ${editorsPickPost.content.substring(0, 100)}…</p>
            <a href="post-details.html?blogId=${editorsPickPost.id}" class="btn btn-outline-primary">Read More</a>
          </div>
			`;
		const tendingPosts = data.posts.filter((post) => data.sections.trendingPosts.includes(post.id));
		document.getElementById("trending-posts").innerHTML =
			`${tendingPosts.map((post) => `
				<article class="card mb-4">
					<div class="card-body d-flex">
					<img class="card-img-sm" src="images/post/${post.image}" alt="${post.title}">
					<div class="ml-3">
						<h4><a alt="${post.title}" href="post-details.html?blogId=${post.id}" class="post-title">${post.title}</a></h4>
						<ul class="card-meta list-inline mb-0">
						<li class="list-inline-item mb-0">
							<i class="ti-calendar"></i>${post.date}
						</li>
						<li class="list-inline-item mb-0">
							<i class="ti-timer"></i>${post.readTime}
						</li>
						</ul>
					</div>
					</div>
			</article>`)}`;

		const popularPost = data.posts.find((post) => post.id == data.sections.popularPost.postId);

		document.getElementById("popular-post").innerHTML = `
		  <article class="card">
          <div class="post-slider slider-sm">
            <img src="images/post/${popularPost.image}" class="card-img-top" alt="${popularPost.title}">
          </div>
          <div class="card-body">
            <h3 class="h4 mb-3"><a class="post-title" href="post-details.html?blogId=${popularPost.id}">${popularPost.title}</a></h3>
            <ul class="card-meta list-inline">
              <li class="list-inline-item">
                <a href="about-me.html" class="card-meta-author">
                  <img src="${data.author.photo}">
                   <span>${data.author.shortName}</span>
                </a>
              </li>
              <li class="list-inline-item">
                <i class="ti-timer"></i>${popularPost.readTime}
              </li>
              <li class="list-inline-item">
                <i class="ti-calendar"></i>${popularPost.date}
              </li>
              <li class="list-inline-item">
               <ul class="card-meta-tag list-inline">
                  ${popularPost.tags.slice(0, 4).map((tag) =>
			`<li class="list-inline-item"><a href="tags.html?tag=${tag.replace("#", "")}">${tag}</a></li>`
		).join('')}
                </ul>
              </li>
            </ul>
          <p>   ${popularPost.content.substring(0, 100)}…</p>
            <a href="post-details.html?blogId=${popularPost.id}" class="btn btn-outline-primary">Read More</a>
          </div>
        </article>`;
		document.getElementById("recent-posts").innerHTML = ` <h2 class="h5 section-title">Recent Post</h2>`;
		document.getElementById("recent-posts").innerHTML +=
			`;
		${data.posts.reverse().map((post) => `
		    <article class="card mb-4">
        <div class="post-slider text-center">
            <img src="images/post/${post.image}" style="width:50%;" class="card-img-top" alt=${post.title}>
        </div>
        <div class="card-body">
            <h3 class="mb-3"><a class="post-title" alt=${post.title} href="post-details.html?blogId=${post.id}">${post.title}</a></h3>
            <ul class="card-meta list-inline">
                <li class="list-inline-item">
                    <a href="about-me.html" class="card-meta-author">
                        <img src="${data.author.photo}">
                   <span>${data.author.shortName}</span>
                    </a>
                </li>
                <li class="list-inline-item">
                    <i class="ti-timer"></i>${post.readTime}
                </li>
                <li class="list-inline-item">
                    <i class="ti-calendar"></i>${post.date}
                </li>
                <li class="list-inline-item">
                    <ul class="card-meta-tag list-inline">
                       ${post.tags.slice(0, 4).map((tag) =>
				`<li class="list-inline-item"><a href="tags.html?tag=${tag.replace("#", "")}">${tag}</a></li>`
			).join('')}
                    </ul>
                </li>
            </ul>
            <p>${post.content.substring(0, 250)}…</p>
            <a href="post-details.html?blogId=${post.id}" alt=${post.title} class="btn btn-outline-primary">Read More</a>
        </div>
  		  </article>`)}`;
	} else if (currentPage === 'post-details') {
		const blogId = urlParams.get('blogId');
		const blogPost = data.posts.find((post) => post.id === blogId);
		document.getElementById("sanjo-blog").innerHTML = `
		<article>
          <div class="post-slider mb-4 text-center">
            <img src="images/post/${blogPost.image}" style="width:50%;" class="card-img" alt="${blogPost.title}">
          </div>
          <h1 class="h2">${blogPost.title}</h1>
          <p class="h4"><i>${blogPost.subTitle}</i></p>
          <ul class="card-meta my-3 list-inline">
            <li class="list-inline-item">
              <a href="about-me.html" class="card-meta-author">
                <img src="${data.author.photo}">
                <span>${data.author.shortName}</span>
              </a>
            </li>
            <li class="list-inline-item">
              <i class="ti-timer"></i>${blogPost.readTime}
            </li>
            <li class="list-inline-item">
              <i class="ti-calendar"></i>${blogPost.date}
            </li>
            <li class="list-inline-item">
              <ul class="card-meta-tag list-inline">
			  ${blogPost.tags.map((tag) =>
			`<li class="list-inline-item"><a href="tags.html?tag=${tag.replace("#", "")}">${tag}</a></li>`
		).join('')}
              </ul>
            </li>
          </ul>
          <div class="content">
		  ${blogPost.content}
          </div>
        </article>
		`;
	} else if (currentPage === 'tags') {
		const tag = urlParams.get('tag');
		console.log(tag)
		const postsWithTag = data.posts.filter((post) => post.tags.includes(`#${tag}`));
		console.log(postsWithTag)
		document.getElementById("posts-with-tags").innerHTML = `
		 <h1 class="h2 mb-4">Showing posts with <mark>#${tag}</mark></h1>
			${postsWithTag.map((post) => `
			<article class="card mb-4">
				<div class="post-slider text-center">
					<img style="width:50%;"  src="images/post/${post.image}" alt="${post.title}" class="card-img-top">
				</div>
				<div class="card-body">
					<h3 class="mb-3"><a alt="${post.title}" class="post-title" href="post-details.html?blogId=${post.id}" >${post.title}</a></h3>
					<ul class="card-meta list-inline">
					<li class="list-inline-item">
						<a href="about-me.html" class="card-meta-author">
						<img src="${data.author.photo}">
                   <span>${data.author.shortName}</span>
						</a>
					</li>
					<li class="list-inline-item">
						<i class="ti-timer"></i>${post.readTime}
					</li>
					<li class="list-inline-item">
						<i class="ti-calendar"></i>${post.date}
					</li>
					<li class="list-inline-item">
						<ul class="card-meta-tag list-inline">
						  ${post.tags.slice(0, 4).map((tag) =>
			`<li class="list-inline-item"><a href="tags.html?tag=${tag.replace("#", "")}">${tag}</a></li>`
		).join('')}
						</ul>
					</li>
					</ul>
					<p> ${post.content.substring(0, 100)}…</p>
					 <a href="post-details.html?blogId=${post.id}" class="btn btn-outline-primary">Read More</a>
				</div>
				</article>
				`)}
				`;

	}

	const recentPostsoForWidget = data.posts.filter((post) => data.sections.recentPosts.includes(post.id));
	document.getElementById("recent-post-widget").innerHTML = ` <h4 class="widget-title">Recent Post</h4>`
	document.getElementById("recent-post-widget").innerHTML +=
		`${recentPostsoForWidget.map((post) => `

			<article class="widget-card">
			<div class="d-flex">
				<img class="card-img-sm" src="images/post/${post.image}" alt="${post.title}">
				<div class="ml-3">
				<h5><a class="post-title"  alt="${post.title}" href="post-details.html?blogId=${post.id}">${post.title}</a></h5>
				<ul class="card-meta list-inline mb-0">
					<li class="list-inline-item mb-0">
					<i class="ti-calendar"></i>${post.date}
					</li>
				</ul>
				</div>
			</div>
			</article>


		`)}`;

	document.getElementById("tag-widget").innerHTML = `
	${data.tags.map((tag) =>
		`<li class="list-inline-item"><a href="tags.html?tag=${tag.title.replace("#", "")}">${tag.title}</a></li>`
	).join('')}
	`;

	document.getElementById("about-widget").innerHTML = `
	    <h4 class="widget-title">Hi, I am ${data.author.shortName}!</h4>
    <img class="img-fluid" src="${data.author.photo}" alt="${data.author.shortName}-photo">
    <p>${data.author.bio}</p>
    <ul class="list-inline social-icons mb-3">
      <li class="list-inline-item"><a target="_blank" href="${data.author.socialLinks.facebook}"><i class="ti-facebook"></i></a></li>
      <li class="list-inline-item"><a target="_blank" href="${data.author.socialLinks.linkedin}"><i class="ti-linkedin"></i></a></li>
      <li class="list-inline-item"><a target="_blank" href="${data.author.socialLinks.instgram}"><i class="ti-instagram"></i></a></li>
      <li class="list-inline-item"><a target="_blank" href="${data.author.socialLinks.youtube}"><i class="ti-youtube"></i></a></li>
    </ul>
    <a href="about-me.html" alt="about sanjo mathew" class="btn btn-primary mb-2">About me</a>
	`;

	document.getElementById("social-links").innerHTML = `
	 <li class="list-inline-item"><a target="_blank" href="${data.author.socialLinks.facebook}"><i class="ti-facebook"></i></a></li>
      <li class="list-inline-item"><a target="_blank" href="${data.author.socialLinks.linkedin}"><i class="ti-linkedin"></i></a></li>
      <li class="list-inline-item"><a target="_blank" href="${data.author.socialLinks.instgram}"><i class="ti-instagram"></i></a></li>
      <li class="list-inline-item"><a target="_blank" href="${data.author.socialLinks.youtube}"><i class="ti-youtube"></i></a></li>
	`;
	document.getElementById("footer-social-links").innerHTML = `
	 <li class="list-inline-item"><a target="_blank" href="${data.author.socialLinks.facebook}"><i class="ti-facebook"></i></a></li>
      <li class="list-inline-item"><a target="_blank" href="${data.author.socialLinks.linkedin}"><i class="ti-linkedin"></i></a></li>
      <li class="list-inline-item"><a target="_blank" href="${data.author.socialLinks.instgram}"><i class="ti-instagram"></i></a></li>
      <li class="list-inline-item"><a target="_blank" href="${data.author.socialLinks.youtube}"><i class="ti-youtube"></i></a></li>
	`;
}

document.addEventListener("DOMContentLoaded", loadContent);