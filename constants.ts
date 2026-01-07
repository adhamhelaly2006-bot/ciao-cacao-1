
import type { MenuCategory } from './types';

export const MENU_DATA: MenuCategory[] = [
  {
    title: "بيتزا جبن",
    id: "pizza-cheese",
    englishTitle: "Cheese Pizza",
    items: [
      { name: "مارجريتا", englishName: "Margherita", price: "165.00", description: "ريد صوص - موتزاريلا - جبنة بارميزان - زعتر - ريحان - زيت زيتون", englishDescription: "Red sauce - mozzarella - parmesan cheese - oregano - basil - olive oil" },
      { name: "كواترو فورماجي", englishName: "Quattro Formaggi", price: "230.00", description: "وايت صوص - بلو تشيز - سكانمورزا - موتزاريلا - جبنة بارميزان - زعتر - ريحان - زيت زيتون", englishDescription: "White sauce - blue cheese - scamorza - mozzarella - parmesan cheese - oregano - basil - olive oil" },
      { name: "بوراتا", englishName: "Burrata", price: "225.00", description: "ريد صوص - جبنة بوراتا - زيتون - رمان (موسمى) - جرجير إيطالي - عسل نحل - عين جمل - موتزاريلا جبنة بارميزان - زعتر - ريحان - زيت زيتون", englishDescription: "Red sauce - burrata cheese - olives - pomegranate (seasonal) - Italian arugula - honey - walnuts - mozzarella - parmesan cheese - oregano - basil - olive oil" }
    ]
  },
  {
    title: "بيتزا خضروات",
    id: "pizza-vegetable",
    englishTitle: "Vegetable Pizza",
    items: [
      { name: "مارينارا", englishName: "Marinara", price: "140.00", description: "ريد صوص - ثوم - بارميزان - زعتر - ريحان - زيت زيتون", englishDescription: "Red sauce - garlic - parmesan - oregano - basil - olive oil" },
      { name: "فيجن", englishName: "Vegan", price: "175.00", description: "ريد صوص - بصل مكرمل - فلفل ألوان - مشروم - باذنجان هالبينو - ذرة حلوة - زعتر - ريحان - زيت زيتون", englishDescription: "Red sauce - caramelized onion - bell peppers - mushroom - eggplant - jalapeno - sweet corn - oregano - basil - olive oil" },
      { name: "مشروم", englishName: "Mushroom", price: "185.00", description: "ريد صوص - مشروم - موتزاريلا - بارميزان - زعتر - ريحان - زيت زيتون", englishDescription: "Red sauce - mushroom - mozzarella - parmesan - oregano - basil - olive oil" }
    ]
  },
  {
    title: "بيتزا دجاج",
    id: "pizza-chicken",
    englishTitle: "Chicken Pizza",
    items: [
      { name: "تشيكن كرسبي", englishName: "Crispy Chicken", price: "225.00", description: "وايت صوص - دجاج مقلي - زيتون - موتزاريلا - بارميزان - زعتر - ريحان - زيت زيتون", englishDescription: "White sauce - fried chicken - olives - mozzarella - parmesan - oregano - basil - olive oil" },
      { name: "جريلد تشيكن", englishName: "Grilled Chicken", price: "225.00", description: "وايت صوص - دجاج مشوي - مشروم - موتزاريلا - جبنة بارميزان - زعتر - ريحان - زيت زيتون", englishDescription: "White sauce - grilled chicken - mushroom - mozzarella - parmesan cheese - oregano - basil - olive oil" },
      { name: "شيش طاووق", englishName: "Shish Tawook", price: "245.00", description: "وايت صوص - قطع شيش طاووق - حلقات بصل - موتزاريلا - جبنة بارميزان - زعتر - ريحان - زيت زيتون", englishDescription: "White sauce - shish tawook pieces - onion rings - mozzarella - parmesan cheese - oregano - basil - olive oil" }
    ]
  },
  {
    title: "بيتزا لحم",
    id: "pizza-beef",
    englishTitle: "Beef Pizza",
    items: [
      { name: "ميسكولارا لا كارني", englishName: "Misto di Carne", price: "245.00", description: "ريد صوص - سلامي - سجق - مشروم - بصل مكرمل - موتزاريلا - جبنة بارميزان - زعتر - ريحان - زيت زيتون", englishDescription: "Red sauce - salami - sausage - mushroom - caramelized onion - mozzarella - parmesan cheese - oregano - basil - olive oil" },
      { name: "كاتيفو", englishName: "Cattivo", price: "225.00", description: "ريد صوص - سلامي - هالبينو موتزاريلا - جبنة بارميزان - زعتر - ريحان - زيت زيتون", englishDescription: "Red sauce - salami - jalapeno - mozzarella - parmesan cheese - oregano - basil - olive oil" },
      { name: "كارنسيكا", englishName: "Carnica", price: "200.00", description: "ريد صوص - بسطرمة - طماطم شيري - جرجير إيطالي - زيتون - موتزاريلا - جبنة بارميزان - زعتر - ريحان - زيت زيتون", englishDescription: "Red sauce - pastrami - cherry tomatoes - Italian arugula - olives - mozzarella - parmesan cheese - oregano - basil - olive oil" },
      { name: "سالسيشيا كونفيردي", englishName: "Salsiccia con Verde", price: "220.00", description: "ريد صوص - سجق - هالبينو - فلفل ألوان - زيتون - رمان (موسمى) - موتزاريلا - جبنة بارميزان - زعتر - ريحان - زيت زيتون", englishDescription: "Red sauce - sausage - jalapeno - bell peppers - olives - pomegranate (seasonal) - mozzarella - parmesan cheese - oregano - basil - olive oil" },
      { name: "مينست ميت", englishName: "Minced Meat", price: "245.00", description: "ريد صوص - لحم مفروم - بصل - زيتون موتزاريلا - جبنة بارميزان - زعتر - ريحان - زيت زيتون", englishDescription: "Red sauce - minced meat - onion - olives - mozzarella - parmesan cheese - oregano - basil - olive oil" }
    ]
  },
  {
    title: "بيتزا سي فود",
    id: "pizza-seafood",
    englishTitle: "Seafood Pizza",
    items: [
      { name: "جمبري مشوي", englishName: "Grilled Shrimp", price: "300.00", description: "صوص من اختيارك - جمبري مشوي - مشروم - موتزاريلا - جبنة بارميزان - زعتر - ريحان - زيت زيتون", englishDescription: "Your choice of sauce - grilled shrimp - mushroom - mozzarella - parmesan cheese - oregano - basil - olive oil" },
      { name: "جمبري كرسبي", englishName: "Crispy Shrimp", price: "300.00", description: "صوص من اختيارك - جمبري فرايد - زيتون - موتزاريلا - جبنة بارميزان - زعتر - ريحان - زيت زيتون", englishDescription: "Your choice of sauce - fried shrimp - olives - mozzarella - parmesan cheese - oregano - basil - olive oil" },
      { name: "جمبري لابيستو", englishName: "Shrimp al Pesto", price: "320.00", description: "جمبري مشوى - صوص بيستو - موتزاريلا - جبنة بارميزان - زعتر - ريحان - زيت زيتون", englishDescription: "Grilled shrimp - pesto sauce - mozzarella - parmesan cheese - oregano - basil - olive oil" },
      { name: "موندو مارينو", englishName: "Mondo Marino", price: "285.00", description: "صوص من اختيارك - جمبري مشوي - كاليماري - بلح بحر - أصابع كابوريا مشروم - موتزاريلا - جبنة بارميزان - زعتر - ريحان - زيت زيتون", englishDescription: "Your choice of sauce - grilled shrimp - calamari - mussels - crab sticks - mushroom - mozzarella - parmesan cheese - oregano - basil - olive oil" },
      { name: "تونه", englishName: "Tuna", price: "255.00", description: "ريد صوص - تونة قطع - حلقات بصل - ذرة حلوة - موتزاريلا - جبنة بارميزان - زعتر - ريحان - زيت زيتون", englishDescription: "Red sauce - tuna chunks - onion rings - sweet corn - mozzarella - parmesan cheese - oregano - basil - olive oil" },
      { name: "سالمون", englishName: "Salmon", price: "270.00", description: "صوص من اختيارك - قطع سالمون - زيتون - جرجير إيطالي ليمون - موتزاريلا - جبنة بارميزان - زعتر - ريحان - زيت زيتون", englishDescription: "Your choice of sauce - salmon pieces - olives - Italian arugula - lemon - mozzarella - parmesan cheese - oregano - basil - olive oil" },
      { name: "أنشوجه", englishName: "Anchovy", price: "299.00", description: "ريد صوص - قطع أنشوجه - طماطم شيري - فلفل ألوان - موتزاريلا جبنة بارميزان - زعتر - ريحان - زيت زيتون", englishDescription: "Red sauce - anchovy pieces - cherry tomatoes - bell peppers - mozzarella - parmesan cheese - oregano - basil - olive oil" }
    ]
  },
  {
    title: "الحلويات",
    id: "sweet-lovers",
    englishTitle: "Desserts",
    items: [
      { name: "بيتزا نوتيلا كلاسيك", englishName: "Classic Nutella Pizza", price: "199.00", description: "نوتيلا - ماس كاربوني", englishDescription: "Nutella - mascarpone" },
      { name: "إضافة مكسرات", englishName: "Add Nuts", price: "50.00", description: "", englishDescription: "" },
      { name: "إضافة فواكه", englishName: "Add Fruits", price: "25.00", description: "", englishDescription: "" },
      { name: "إضافة عسل", englishName: "Add Honey", price: "25.00", description: "", englishDescription: "" }
    ]
  },
  {
    title: "بيتزا ساندويتش",
    id: "pizza-sandwich",
    englishTitle: "Pizza Sandwiches",
    items: [
      { name: "ستيك مشوي", englishName: "Grilled Steak", price: "220.00", description: "قطع ستيك فيليه مشوي - موتزاريلا - جرجير إيطالي - بصل - مشروم - جبنة شيدر", englishDescription: "Grilled fillet steak pieces - mozzarella - Italian arugula - onion - mushroom - cheddar cheese" },
      { name: "تشيكن بيستو", englishName: "Chicken Pesto", price: "240.00", description: "دجاج كرسبي - موتزاريلا - أمريكان شيز - صلصة بيستو - زيت زيتون", englishDescription: "Crispy chicken - mozzarella - American cheese - pesto sauce - olive oil" },
      { name: "شيش طاووق", englishName: "Shish Tawook", price: "220.00", description: "قطع دجاج مشوي - بصل - فلفل ألوان - موتزاريلا - زيت زيتون", englishDescription: "Grilled chicken pieces - onion - bell peppers - mozzarella - olive oil" },
      { name: "فيجن شيز", englishName: "Vegan Cheese", price: "185.00", description: "صلصة بيستو - موتزاريلا - حلقات بصل - أفوكادو - جرجير إيطالي - زيت زيتون", englishDescription: "Pesto sauce - mozzarella - onion rings - avocado - Italian arugula - olive oil" }
    ]
  },
  {
    title: "باستا كلاسيك",
    id: "pasta-classic",
    englishTitle: "Classic Pasta",
    items: [
      { name: "ريد", englishName: "Red", price: "90.00", description: "مكرونة من اختيارك - صوص ريد - جبنة بارميزان", englishDescription: "Your choice of pasta - red sauce - parmesan cheese" },
      { name: "وايت", englishName: "White", price: "115.00", description: "مكرونة من اختيارك - صوص وايت - جبنة بارميزان", englishDescription: "Your choice of pasta - white sauce - parmesan cheese" },
      { name: "براون", englishName: "Brown", price: "120.00", description: "مكرونة من اختيارك - صوص براون - جبنة بارميزان", englishDescription: "Your choice of pasta - brown sauce - parmesan cheese" },
      { name: "بينك", englishName: "Pink", price: "95.00", description: "مكرونة من اختيارك - صوص بينك - جبنة بارميزان", englishDescription: "Your choice of pasta - pink sauce - parmesan cheese" },
      { name: "بيستو", englishName: "Pesto", price: "165.00", description: "مكرونة من اختيارك - صوص بيستو - جبنة بارميزان", englishDescription: "Your choice of pasta - pesto sauce - parmesan cheese" },
      { name: "أرابياتا", englishName: "Arrabbiata", price: "115.00", description: "مكرونة بينا - صوص مارينارا - جبنة بارميزان - خضروات", englishDescription: "Penne pasta - marinara sauce - parmesan cheese - vegetables" },
      { name: "ماك البو", englishName: "Mac Elbow", price: "199.00", description: "مكرونة البو - صوص ماك - جبنة بارميزان", englishDescription: "Elbow macaroni - mac sauce - parmesan cheese" },
      { name: "كواترو", englishName: "Quattro", price: "210.00", description: "مكرونة فيتوتشيني - موتزاريلا - شيدر أصفر - شيدر أحمر جبنة ريكفورد - جبنة بارميزان - أمريكان شيدر", englishDescription: "Fettuccine pasta - mozzarella - yellow cheddar - red cheddar - Roquefort cheese - parmesan cheese - American cheddar" }
    ]
  },
  {
    title: "باستا دجاج",
    id: "pasta-chicken",
    englishTitle: "Chicken Pasta",
    items: [
      { name: "نجرسكو", englishName: "Negresco", price: "220.00", description: "مكرونة فوتوتشيني - جريلد تشيكن - صوص نجرسكو - جبنة موتزاريلا - جبنة بارميزان", englishDescription: "Fettuccine pasta - grilled chicken - Negresco sauce - mozzarella cheese - parmesan cheese" },
      { name: "ألفريدو", englishName: "Alfredo", price: "195.00", description: "مكرونة فوتوتشيني - جريلد تشيكن - صوص ألفريدو - مشروم - جبنة بارميزان", englishDescription: "Fettuccine pasta - grilled chicken - Alfredo sauce - mushroom - parmesan cheese" },
      { name: "كوردون بلو", englishName: "Cordon Bleu", price: "180.00", description: "مكرونة من اختيارك - أصابع كوردون بلو - جبنة بارميزان", englishDescription: "Your choice of pasta - Cordon Bleu sticks - parmesan cheese" },
      { name: "تشيكن كريسبي", englishName: "Crispy Chicken", price: "180.00", description: "مكرونة من اختيارك - قطع دجاج كريسبي - جبنة بارميزان", englishDescription: "Your choice of pasta - crispy chicken pieces - parmesan cheese" },
      { name: "شيش طاووق", englishName: "Shish Tawook", price: "175.00", description: "مكرونة من اختيارك - قطع دجاج شيش - جبنة بارميزان", englishDescription: "Your choice of pasta - Shish Tawook pieces - parmesan cheese" },
      { name: "تشيكن ماك", englishName: "Chicken Mac", price: "235.00", description: "مكرونة دوبل إلبو - دجاج من اختيارك (جريلد - كريسبي كوردون بلو) - صوص الماك - جبنة بارميزان", englishDescription: "Double elbow macaroni - your choice of chicken (grilled - crispy - cordon bleu) - mac sauce - parmesan cheese", note: "وتقدم مع صوص من إختيارك (رانش - تكساس - باربيكيو - مايونيز - سويت شيلي)", englishNote: "Served with your choice of sauce (Ranch - Texas - BBQ - Mayonnaise - Sweet Chili)" },
      { name: "تشيكن رانش", englishName: "Chicken Ranch", price: "185.00", description: "مكرونة بينا - صوص وايت - فرايد تشيكن - صوص رانش - جبنة بارميزان", englishDescription: "Penne pasta - white sauce - fried chicken - ranch sauce - parmesan cheese" },
      { name: "تشيكن تكساس", englishName: "Chicken Texas", price: "185.00", description: "مكرونة بينا - صوص وايت - فرايد تشيكن - صوص تكساس - جبنة بارميزان", englishDescription: "Penne pasta - white sauce - fried chicken - Texas sauce - parmesan cheese" },
      { name: "سبانيش", englishName: "Spinach", price: "185.00", description: "مكرونة فيتوتشيني - صوص سبانيتشي - جريلد تشيكن - فلفل - مشروم - جبنة بارميزان", englishDescription: "Fettuccine pasta - spinach sauce - grilled chicken - pepper - mushroom - parmesan cheese" },
      { name: "كاربونارا", englishName: "Carbonara", price: "235.00", description: "مكرونة فيتوتشيني - تركي مدخن - بيف مدخن - جريلد تشيكن - ذرة حلوة - جبنة بارميزان", englishDescription: "Fettuccine pasta - smoked turkey - smoked beef - grilled chicken - sweet corn - parmesan cheese" },
      { name: "نابولي", englishName: "Napoli", price: "199.00", description: "مكرونة بينا - صوص نابولي - جريلد تشيكن - مشروم - زيت زيتون - جبنة بارميزان", englishDescription: "Penne pasta - Napoli sauce - grilled chicken - mushroom - olive oil - parmesan cheese" },
      { name: "جريلد تشيكن", englishName: "Grilled Chicken", price: "185.00", description: "مكرونة بينا - صوص من اختيارك - جريلد تشيكن - جبنة بارميزان", englishDescription: "Penne pasta - your choice of sauce - grilled chicken - parmesan cheese" }
    ]
  },
  {
    title: "باستا لحم",
    id: "pasta-beef",
    englishTitle: "Beef Pasta",
    items: [
      { name: "بوافر", englishName: "Poivre", price: "250.00", description: "مكرونة إلبو - صوص بواقر - قطع بيف فلتو – بارميزان", englishDescription: "Elbow macaroni - poivre sauce - beef fillet pieces - parmesan" },
      { name: "براون بيف", englishName: "Brown Beef", price: "245.00", description: "مكرونة بينا - صوص براون - قطع بيف فلتو – بارميزان", englishDescription: "Penne pasta - brown sauce - beef fillet pieces - parmesan" },
      { name: "لازانيا بيف", englishName: "Beef Lasagna", price: "235.00", description: "مكرونة لازانيا شرائح - لحم مفروم مع صوص اللازانيا الإيطالي - موتزاريلا – بارميزان", englishDescription: "Lasagna sheets - minced meat with Italian lasagna sauce - mozzarella - parmesan" },
      { name: "بولونيز", englishName: "Bolognese", price: "140.00", description: "مكرونة بينا - صوص مارينارا - خضروات - بارميزان", englishDescription: "Penne pasta - marinara sauce - vegetables - parmesan" },
      { name: "برجر باستا", englishName: "Burger Pasta", price: "185.00", description: "مكرونة بينا - صوص من اختيارك - قطعة بيف برجر – بارميزان", englishDescription: "Penne pasta - your choice of sauce - beef burger patty - parmesan" }
    ]
  },
  {
    title: "باستا سي فود",
    id: "pasta-seafood",
    englishTitle: "Seafood Pasta",
    items: [
      { name: "باستا جمبري", englishName: "Shrimp Pasta", price: "250.00", description: "مكرونة بينا - صوص من اختيارك - جمبري كبير \"جريلد أو مشوي\" - بارميزان", englishDescription: "Penne pasta - your choice of sauce - large shrimp (grilled) - parmesan" },
      { name: "سي فود باستا", englishName: "Seafood Pasta", price: "245.00", description: "مكرونة بينا - صوص من اختيارك - جمبري كبير مشوي - أصابع كابوريا - كاليماري - بارميزان", englishDescription: "Penne pasta - your choice of sauce - large grilled shrimp - crab sticks - calamari - parmesan" }
    ]
  },
  {
    title: "ساندويتش دجاج",
    id: "sandwich-chicken",
    englishTitle: "Chicken Sandwiches",
    items: [
      { name: "جريلد تشيكن", englishName: "Grilled Chicken", price: "120.00", description: "شرائح الدجاج المشوي - خس - مايونيز - خيار – طماطم", englishDescription: "Grilled chicken slices - lettuce - mayonnaise - cucumber - tomato" },
      { name: "فاهيتا", englishName: "Fajita", price: "155.00", description: "قطع فاهيتا دجاج - صوص فاهيتا - خضروات - ميكس جبن", englishDescription: "Chicken fajita pieces - fajita sauce - vegetables - mixed cheese", note: "تقدم في عيش تورتيلا", englishNote: "Served in a tortilla" },
      { name: "فيلادلفيا", englishName: "Philadelphia", price: "125.00", description: "قطع الدجاج المشوي - صوص فيلادلفيا - خضروات – موتزاريلا", englishDescription: "Grilled chicken pieces - Philadelphia sauce - vegetables - mozzarella" },
      { name: "شيش طاووق", englishName: "Shish Tawook", price: "110.00", description: "قطع الشيش المشوي - خس – مايونيز", englishDescription: "Grilled shish tawook pieces - lettuce - mayonnaise" },
      { name: "كوردون بلو", englishName: "Cordon Bleu", price: "170.00", description: "أصابع كوردون بلو - خس - طماطم - خيار مخلل - صوص جبنة", englishDescription: "Cordon bleu sticks - lettuce - tomato - pickles - cheese sauce" },
      { name: "تشيكن كرسبي", englishName: "Crispy Chicken", price: "99.00", description: "قطع الدجاج المقلية - خس - طماطم - خيار مخلل – مايونيز", englishDescription: "Fried chicken pieces - lettuce - tomato - pickles - mayonnaise" },
      { name: "تكساس", englishName: "Texas", price: "115.00", description: "شرائح الدجاج المشوي - صوص تكساس - خس - مايونيز - خيار – طماطم", englishDescription: "Grilled chicken slices - Texas sauce - lettuce - mayonnaise - cucumber - tomato" },
      { name: "تشيكن رانش", englishName: "Chicken Ranch", price: "115.00", description: "شرائح الدجاج المشوي - صوص رانش - خس - مايونيز - خيار – طماطم", englishDescription: "Grilled chicken slices - ranch sauce - lettuce - mayonnaise - cucumber - tomato" },
      { name: "تشيكن شيز مشروم", englishName: "Chicken Cheese Mushroom", price: "140.00", description: "شرائح الدجاج المشوي - مشروم - موتزاريلا - صوص جبنة", englishDescription: "Grilled chicken slices - mushroom - mozzarella - cheese sauce" }
    ]
  },
  {
    title: "ساندويتش لحم",
    id: "sandwich-beef",
    englishTitle: "Beef Sandwiches",
    items: [
      { name: "ستيك مشوي", englishName: "Grilled Steak", price: "195.00", description: "قطع بيف فيليه مشوي - صوص تكساس - خس - مشروم - خيار مخلل – بصل", englishDescription: "Grilled beef fillet pieces - Texas sauce - lettuce - mushroom - pickles - onion" },
      { name: "بيف فاهيتا", englishName: "Beef Fajita", price: "230.00", description: "قطع بيف مشوي - صوص فاهيتا - خضروات - ميكس جبن", englishDescription: "Grilled beef pieces - fajita sauce - vegetables - mixed cheese", note: "تقدم في عيش تورتيلا", englishNote: "Served in a tortilla" }
    ]
  },
  {
    title: "ساندويتش سي فود",
    id: "sandwich-seafood",
    englishTitle: "Seafood Sandwiches",
    items: [
      { name: "جمبري", englishName: "Shrimp", price: "220.00", description: "جمبري كبير - صوص سي فود - صوص تارتار - خيار مخلل – خس", englishDescription: "Large shrimp - seafood sauce - tartar sauce - pickles - lettuce", note: "مقلي أو مشوي", englishNote: "Fried or grilled" },
      { name: "سي فود", englishName: "Seafood", price: "230.00", description: "جمبري كبير مشوي - كاليماري - أصابع كابوريا - صوص تارتار - خيار مخلل – خس", englishDescription: "Large grilled shrimp - calamari - crab sticks - tartar sauce - pickles - lettuce" }
    ]
  },
  {
    title: "برجر أمريكي",
    id: "burger-american",
    englishTitle: "American Burger",
    items: [
      { name: "برجر كلاسيك", englishName: "Classic Burger", price: "110.00", description: "قطعة برجر مشوي - خس - طماطم - مايونيز - بصل - خيار مخلل", englishDescription: "Grilled burger patty - lettuce - tomato - mayonnaise - onion - pickles" },
      { name: "برجر جبنة", englishName: "Cheese Burger", price: "149.00", description: "قطعة برجر مشوي - شرائح جبنة - صوص جبنة - خس - طماطم - مايونيز - بصل - خيار مخلل", englishDescription: "Grilled burger patty - cheese slices - cheese sauce - lettuce - tomato - mayonnaise - onion - pickles" },
      { name: "برجر تكساس", englishName: "Texas Burger", price: "175.00", description: "قطعة برجر مشوي - بيف مدخن - صوص تكساس - خس - طماطم - مايونيز - بصل - خيار مخلل", englishDescription: "Grilled burger patty - smoked beef - Texas sauce - lettuce - tomato - mayonnaise - onion - pickles" },
      { name: "برجر رانش", englishName: "Ranch Burger", price: "175.00", description: "قطعة برجر مشوي - تركي مدخن - صوص رانش - خس - طماطم - مايونيز - بصل - خيار مخلل", englishDescription: "Grilled burger patty - smoked turkey - ranch sauce - lettuce - tomato - mayonnaise - onion - pickles" },
      { name: "أونيون برجر", englishName: "Onion Burger", price: "160.00", description: "قطعة برجر مشوي - حلقات بصل - مشروم - خس - طماطم - مايونيز - خيار مخلل", englishDescription: "Grilled burger patty - onion rings - mushroom - lettuce - tomato - mayonnaise - pickles" },
      { name: "برجر موتزاريلا", englishName: "Mozzarella Burger", price: "135.00", description: "قطعة برجر مشوي - أصابع موتزاريلا - طماطم - خس - بصل - خيار مخلل", englishDescription: "Grilled burger patty - mozzarella sticks - tomato - lettuce - onion - pickles" },
      { name: "هيكوري برجر", englishName: "Hickory Burger", price: "160.00", description: "قطعة برجر مشوي - صوص باربيكيو - سلامي - جبنة شرائح - خس - طماطم-مايونيز - بصل - مايونيز - خيار مخلل", englishDescription: "Grilled burger patty - BBQ sauce - salami - cheese slice - lettuce - tomato - mayonnaise - onion - pickles" },
      { name: "برجر شيلي", englishName: "Chili Burger", price: "115.00", description: "قطعة برجر مشوي - هاليبينو - صوص شيلي - طماطم - مايونيز - بصل - خس - خيار مخلل", englishDescription: "Grilled burger patty - jalapeno - chili sauce - tomato - mayonnaise - onion - lettuce - pickles" }
    ]
  },
  {
    title: "سماش برجر",
    id: "burger-smash",
    englishTitle: "Smash Burger",
    items: [
      { name: "كلاسيك سماش برجر", englishName: "Classic Smash Burger", price: "120.00", description: "2 قطعة برجر مشوي - بصل مكرمل - مايونيز - خس - طماطم - خيار مخلل", englishDescription: "2 grilled burger patties - caramelized onion - mayonnaise - lettuce - tomato - pickles" },
      { name: "شيز سماش برجر", englishName: "Cheese Smash Burger", price: "135.00", description: "2 قطعة برجر مشوي - شرائح جبنة - صوص جبنة - بصل مكرمل - خس - طماطم - مايونيز - بصل - خيار مخلل", englishDescription: "2 grilled burger patties - cheese slices - cheese sauce - caramelized onion - lettuce - tomato - mayonnaise - onion - pickles" },
      { name: "سماش تكساس برجر", englishName: "Smash Texas Burger", price: "175.00", description: "2 قطعة برجر مشوي - بيف مدخن - صوص تكساس - بصل مكرمل - مايونيز - خس - طماطم - خيار مخلل", englishDescription: "2 grilled burger patties - smoked beef - Texas sauce - caramelized onion - mayonnaise - lettuce - tomato - pickles" },
      { name: "سماش رانش برجر", englishName: "Smash Ranch Burger", price: "175.00", description: "2 قطعة برجر مشوي - تركي مدخن - صوص رانش - بصل مكرمل - مايونيز - خس - طماطم - خيار مخلل", englishDescription: "2 grilled burger patties - smoked turkey - ranch sauce - caramelized onion - mayonnaise - lettuce - tomato - pickles" },
      { name: "أونيون سماش برجر", englishName: "Onion Smash Burger", price: "155.00", description: "2قطعة برجر مشوي - حلقات بصل - مشروم - بصل مكرمل - مايونيز - خس - طماطم - خيار مخلل", englishDescription: "2 grilled burger patties - onion rings - mushroom - caramelized onion - mayonnaise - lettuce - tomato - pickles" },
      { name: "سماش موتزاريلا برجر", englishName: "Smash Mozzarella Burger", price: "135.00", description: "2 قطعة برجر مشوي - أصابع موتزاريلا - بصل مكرمل - مايونيز - خس - طماطم - خيار مخلل", englishDescription: "2 grilled burger patties - mozzarella sticks - caramelized onion - mayonnaise - lettuce - tomato - pickles" },
      { name: "هيكورى سماش برجر", englishName: "Hickory Smash Burger", price: "130.00", description: "2 قطعة برجر مشوي - سلامي - صوص باربيكيو - شرائح جبنة - بصل مكرمل - مايونيز - خس - طماطم - خيار مخلل", englishDescription: "2 grilled burger patties - salami - BBQ sauce - cheese slice - caramelized onion - mayonnaise - lettuce - tomato - pickles" },
      { name: "سماش شيلي برجر", englishName: "Smash Chili Burger", price: "125.00", description: "2 قطعة برجر مشوي - هالبينو - صوص شيلي - بصل مكرمل - مايونيز - خس - طماطم - خيار مخلل", englishDescription: "2 grilled burger patties - jalapeno - chili sauce - caramelized onion - mayonnaise - lettuce - tomato - pickles" },
      { name: "سماش سكالوبيني", englishName: "Smash Scallopini", price: "185.00", description: "2 قطعة برجر مشوي - سلامي - كريمة - صوص سكالوبيني - بصل مكرمل - مايونيز - خس - طماطم - خيار مخلل", englishDescription: "2 grilled burger patties - salami - cream - scallopini sauce - caramelized onion - mayonnaise - lettuce - tomato - pickles" },
      { name: "برجر سماش تريبل", englishName: "Triple Smash Burger", price: "210.00", description: "3 قطع برجر مشوي - جبنة شرائح - صوص جبنة - بيف مدخن - تركي مدخن - بصل مكرمل - مايونيز خس - طماطم - خيار مخلل", englishDescription: "3 grilled burger patties - cheese slice - cheese sauce - smoked beef - smoked turkey - caramelized onion - mayonnaise - lettuce - tomato - pickles" }
    ]
  },
  {
    title: "المقبلات",
    id: "appetizers",
    englishTitle: "Appetizers",
    items: [
      { name: "ويدجز", englishName: "Wedges", price: "30.00", description: "", englishDescription: "" },
      { name: "أونيون رينج", englishName: "Onion Rings", price: "49.00", description: "", englishDescription: "" },
      { name: "موتزاريلا ستيك", englishName: "Mozzarella Sticks", price: "55.00", description: "", englishDescription: "" },
      { name: "ستربس", englishName: "Strips", price: "120.00", description: "", englishDescription: "" },
      { name: "كرينكل", englishName: "Crinkle Fries", price: "49.00", description: "", englishDescription: "" }
    ]
  },
  {
    title: "السلطات",
    id: "salad",
    englishTitle: "Salads",
    items: [
      { name: "سيزر سالاد", englishName: "Caesar Salad", price: "185.00", description: "خس كابوتشا - صوص سيزر - جريلد شيكن - جبنة بارميزان", englishDescription: "Lettuce - Caesar sauce - grilled chicken - parmesan cheese" },
      { name: "جريك سالاد", englishName: "Greek Salad", price: "99.00", description: "خس كابوتشا - خيار - طماطم - جبنة فيتا - زيت زيتون - زيتون شرائح - حلقات بصل - زعتر - جبنة بارميزان", englishDescription: "Lettuce - cucumber - tomato - feta cheese - olive oil - sliced olives - onion rings - oregano - parmesan cheese" },
      { name: "كول سلو", englishName: "Coleslaw", price: "30.00", description: "كرنب - جزر - مايونيز - عسل نحل", englishDescription: "Cabbage - carrots - mayonnaise - honey" },
      { name: "تونة باستا سالاد", englishName: "Tuna Pasta Salad", price: "160.00", description: "تونة قطع - مكرونة إلبو - فلفل - بصل - ليمون - زيتون شرائح", englishDescription: "Tuna chunks - elbow macaroni - pepper - onion - lemon - sliced olives" }
    ]
  },
  {
    title: "الإضافات",
    id: "extras",
    englishTitle: "Extras",
    items: [
      { name: "تركي مدخن", englishName: "Smoked Turkey", price: "30.00", description: "", englishDescription: "" },
      { name: "سجق", englishName: "Sausage", price: "25.00", description: "", englishDescription: "" },
      { name: "بسطرمة", englishName: "Pastrami", price: "30.00", description: "", englishDescription: "" },
      { name: "بيف مدخن", englishName: "Smoked Beef", price: "30.00", description: "", englishDescription: "" },
      { name: "قطع بيف فيليه", englishName: "Beef Fillet Pieces", price: "60.00", description: "", englishDescription: "" },
      { name: "سلامي", englishName: "Salami", price: "30.00", description: "", englishDescription: "" },
      { name: "صوص تارتار", englishName: "Tartar Sauce", price: "25.00", description: "", englishDescription: "" },
      { name: "جبنة ريكفورد", englishName: "Roquefort Cheese", price: "30.00", description: "", englishDescription: "" },
      { name: "جبنة موتزاريلا", englishName: "Mozzarella Cheese", price: "25.00", description: "", englishDescription: "" },
      { name: "جبنة بارميزان", englishName: "Parmesan Cheese", price: "40.00", description: "", englishDescription: "" },
      { name: "هاليبينو", englishName: "Jalapeno", price: "15.00", description: "", englishDescription: "" },
      { name: "مشروم", englishName: "Mushroom", price: "25.00", description: "", englishDescription: "" },
      { name: "زيتون شرائح", englishName: "Sliced Olives", price: "15.00", description: "", englishDescription: "" },
      { name: "أمريكان شيدر", englishName: "American Cheddar", price: "20.00", description: "", englishDescription: "" },
      { name: "صوص شيدر", englishName: "Cheddar Sauce", price: "30.00", description: "", englishDescription: "" },
      { name: "صوص بيستو", englishName: "Pesto Sauce", price: "30.00", description: "", englishDescription: "" },
      { name: "صوص سيزر", englishName: "Caesar Sauce", price: "30.00", description: "", englishDescription: "" },
      { name: "صوص باربيكيو", englishName: "BBQ Sauce", price: "25.00", description: "", englishDescription: "" },
      { name: "صوص رانش", englishName: "Ranch Sauce", price: "25.00", description: "", englishDescription: "" },
      { name: "مايونيز", englishName: "Mayonnaise", price: "25.00", description: "", englishDescription: "" },
      { name: "صوص تكساس", englishName: "Texas Sauce", price: "25.00", description: "", englishDescription: "" }
    ]
  },
  {
    title: "المشروبات",
    id: "drinks",
    englishTitle: "Drinks",
    items: [
      { name: "مياه معدنية صغيره", englishName: "Small Mineral Water", price: "10.00", description: "", englishDescription: "" },
      { name: "بيبسي", englishName: "Pepsi", price: "25.00", description: "", englishDescription: "" },
      { name: "سفن اب", englishName: "7 Up", price: "25.00", description: "", englishDescription: "" },
      { name: "ميرندا", englishName: "Mirinda", price: "25.00", description: "", englishDescription: "" },
      { name: "ريدبول", englishName: "Red Bull", price: "65.00", description: "", englishDescription: "" }
    ]
  }
];