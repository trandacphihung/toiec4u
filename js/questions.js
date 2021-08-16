// creating an array and passing the number, questions, options, and answers
// Ms. Durkin asked for <a href="#" data-toggle="popover-volunteer" data-original-title="" title="">volunteers</a> to help ------- with the employee <a href="#" data-toggle="popover-fitness">fitness</a> program.`
let questions1 = [
  {
    numb: 1,
    question: `Ms. Carpenter will be <a href="#" data-toggle="popover-attend">attending</a> the <a href="#" data-toggle="popover-conference">conference</a> with ----- marketing team`,
    answer: "(B) her",
    options: ["(A) she", "(B) her", "(C) hers", "(D) herself"],
    explain: `
    Ms. Carpenter will be attending the conference with her marketing team
    <br>
    Bà Carpenter sẽ tham dự hội nghị với nhóm tiếp thị của bà
    <br>
    `,
  },
  {
    numb: 2,
    question: `------ the last ten years, Bay City's <a href="#" data-toggle="popover-population">population</a> has grown by about 27 percent.`,
    answer: "(C) During",
    options: ["(A) As", "(B) Against", "(C) During", "(D) Below"],
    explain: `
    During the last ten years, Bay City's population has grown by about 27 percent.
    <br>
    Trong mười năm qua, dân số của Thành phố Bay đã tăng khoảng 27 phần trăm
    <br>
    `,
  },
  {
    numb: 3,
    question: `Please <a href="#" data-toggle="popover-congratulate">congratulate</a> Alan Schmit, ----- of the Leadership Award in Nursing at Knoll Hospital.`,
    answer: "(D) winner",
    options: ["(A) won", "(B) wins", "(C) winning", "(D) winner"],
    explain: `
    Please congratulate Alan Schmit, winner of the Leadership Award in Nursing at Knoll Hospital.
    <br>
    Xin chúc mừng Alan Schmit, người chiến thắng Giải thưởng Lãnh đạo trong ngành Điều dưỡng tại Bệnh viện Knoll.
    `,
  },
  {
    numb: 4,
    question: `Ireland's largest software <a href="#" data-toggle="popover-producer">producer</a> will ------ be opening a large <a href="#" data-toggle="popover-facility">facility</a> in Cork`,
    answer: "(A) soon",
    options: ["(A) soon", "(B) such", "(C) ever", "(D) like"],
    explain: `
    Ireland's largest software producer will soon be opening a large facility in Cork.
    <br>
    Nhà sản xuất phần mềm lớn nhất Ireland sẽ sớm mở một cơ sở lớn ở Cork
    <br>
    `,
  },
  {
    numb: 5,
    question: `Ashburn Bank's online service has been in high <a href="#" data-toggle="popover-demand">demand</a> -----`,
    answer: "(C) lately",
    options: ["(A) lateness", "(B) later", "(C) lately", "(D) latest"],
    explain: `
    Ashburn Bank's online service has been in high demand lately
    <br>
    Dịch vụ trực tuyến của Ngân hàng Ashburn gần đây có nhu cầu cao
    <br>
    `,
  },
];

let questions2 = [
  {
    numb: 6,
    question: `The ------- of videos to electronic press <a href="#" data-toggle="popover-release">releases</a> can help companies showcase their products
    <br>
    <a href="#" data-toggle="popover-content">(A) content, </a>
      <a href="#" data-toggle="popover-addition">(B) addition, </a>
      <a href="#" data-toggle="popover-pictures">(C) pictures, </a>
      <a href="#" data-toggle="popover-promotion">(D) promotion</a>`,
    answer: "(B) addition",
    options: ["(A) content", "(B) addition", "(C) pictures", "(D) promotion"],
    explain: `
    The addition of videos to electronic press releases can help companies showcase their products.
    <br>
    Việc bổ sung video vào thông cáo báo chí điện tử có thể giúp các công ty giới thiệu sản phẩm của họ.
    <br>
    `,
  },
  {
    numb: 7,
    question: `Ms. Hyun is reviewing the training <a href="#" data-toggle="popover-manual">manual</a> to see if updates ------`,
    answer: "(C) are needed",
    options: [
      "(A) have need",
      "(B) needing",
      "(C) are needed",
      "(D) to be needed",
    ],
    explain: `
    Ms. Hyun is reviewing the training manual to see if updates are needed.
    <br>
    Cô Hyun đang xem lại sổ tay đào tạo để xem có cần cập nhật hay không.
    <br>
    `,
  },
  {
    numb: 8,
    question: `When leaving the <a href="#" data-toggle="popover-auditorium">auditorium</a>, please exit ----- the doors on the lower level.
    <br>
    <a href="#" data-toggle="popover-except">except | </a>
    <a href="#" data-toggle="popover-inside">inside | </a>
    <a href="#" data-toggle="popover-without">without | </a>
    <a href="#" data-toggle="popover-through">through</a>`,
    answer: "(D) through",
    options: ["(A) except", "(B) inside", "(C) without", "(D) through"],
    explain: `
    When leaving the auditorium, please exit through the doors on the lower level.
    <br>
    Khi rời khán phòng, vui lòng thoát qua các cửa ở tầng thấp hơn.
    <br>
    `,
  },
  {
    numb: 9,
    question: `The <a href="#" data-toggle="popover-judges">judges</a> for this year's screenplay <a href="#" data-toggle="popover-competition">competition</a> include ---- from Hanovi Studios.
    <br>
    <a href="#" data-toggle="popover-represent">represent | </a>
    <a href="#" data-toggle="popover-representative">representative</a>`,
    answer: "(B) representatives",
    options: [
      "(A) represents",
      "(B) representatives",
      "(C) represented",
      "(D) represent",
    ],
    explain: `
    The judges for this year's screenplay competition include representatives from Hanovi Studios.
    <br>
    Ban giám khảo cho cuộc thi viết kịch bản năm nay bao gồm đại diện của Hanovi Studios.
    <br>
    `,
  },
  {
    numb: 10,
    question: `I have attached my resume detailing my ------ experience in the hotel industry.
    <br>
    <a href="#" data-toggle="popover-extensive">extensive | </a>
    <a href="#" data-toggle="popover-punctual">punctual | </a>
    <a href="#" data-toggle="popover-prospective">prospective | </a>
    <a href="#" data-toggle="popover-accepted">accepted</a>`,
    answer: "(A) extensive",
    options: [
      "(A) extensive",
      "(B) punctual",
      "(C) prospective",
      "(D) accepted",
    ],
    explain: `
    I have attached my resume detailing my extensive experience in the hotel industry.
    <br>
    Tôi đã đính kèm sơ yếu lý lịch của mình trình bày chi tiết kinh nghiệm dày dặn của tôi trong ngành khách sạn.
    <br>
    `,
  },
];

let questions3 = [
  {
    numb: 11,
    question: `Remember to check the spelling of Mr. Kamashi's name when ----- the document
    <br>
    <a href="#" data-toggle="popover-revise">revise</a>`,
    answer: "(A) revising",
    options: ["(A) revising", "(B) revises", "(C) revised", "(D) revise"],
    explain: `
    Remember to check the spelling of Mr. Kamashi's name when revising the document.
    <br>
    Nhớ kiểm tra chính tả tên ông Kamashi khi sửa tài liệu.
    <br>
    `,
  },
  {
    numb: 12,
    question: `<a href="#" data-toggle="popover-residents">Residents</a> visited City Hall to ask --- developers will 
    <a href="#" data-toggle="popover-preserve">preserve</a> the <a href="#" data-toggle="popover-historic">historic </a> 
    <a href="#" data-toggle="popover-property">properties</a>
    <br>
    <a href="#" data-toggle="popover-whether">whether</a>`,
    answer: "(C) whether",
    options: ["(A) although", "(B) since", "(C) whether", "(D) both"],
    explain: `
    Residents visited City Hall to ask whether developers will preserve the historic properties.
    <br>
    Cư dân đến thăm Tòa thị chính để hỏi liệu các nhà phát triển có bảo tồn các tài sản lịch sử hay không.
    <br>
    `,
  },
  {
    numb: 13,
    question: `The Ford Group's <a href="#" data-toggle="popover-propose">proposed </a> <a href="#" data-toggle="popover-advertise">advertising </a> 
    <a href="#" data-toggle="popover-campaign">campaign</a> is by far the most ----- we have seen so far.
    <br>
    <a href="#" data-toggle="popover-innovate">innovate | </a>
    <a href="#" data-toggle="popover-innovative">innovative | </a>
    <a href="#" data-toggle="popover-innovation">innovations | </a>`,
    answer: "(B) innovative",
    options: [
      "(A) innovate",
      "(B) innovative",
      "(C) innovations",
      "(D) innovatively",
    ],
    explain: `
    The Ford Group's proposed advertising campaign is by far the most innovative we have seen so far.
    <br>
    Cho đến nay, chiến dịch quảng cáo được đề xuất của Tập đoàn Ford là sáng tạo nhất mà chúng tôi từng thấy cho đến nay.
    <br>
    `,
  },
  {
    numb: 14,
    question: `Solei Landscaping <a href="#" data-toggle="popover-announce">announced</a> that the design for the Cherry Hill building <a href="#" data-toggle="popover-complex">complex</a> is ----- complete`,
    answer: "(A) almost",
    options: ["(A) almost", "(B) nearby", "(C) anytime", "(D) yet"],
    explain: `
    Solei Landscaping announced that the design for the Cherry Hill building complex is almost complete.
    <br>
    Solei Landscaping thông báo rằng thiết kế cho khu phức hợp tòa nhà Cherry Hill gần như hoàn thành.
    <br>
    `,
  },
  {
    numb: 15,
    question: ` Daniel Nishida, the <a href="#" data-toggle="popover-chief">chief</a> <a href="#" data-toggle="popover-supply">supply</a> officer, asked that --- be given full 
    <a href="#" data-toggle="popover-responsibility">responsibility</a> for approving all <a href="#" data-toggle="popover-invoice">invoices</a>`,
    answer: "(A) he",
    options: ["(A) he", "(B) him", "(C) his", "(D) himself"],
    explain: `
    Daniel Nishida, the chief supply officer, asked that he be given full responsibility for approving all invoices.
    <br>
    Daniel Nishida, giám đốc cung cấp, yêu cầu anh ta được giao toàn bộ trách nhiệm phê duyệt tất cả các hóa đơn.
    <br>
    `,
  },
];

let questions4 = [
  {
    numb: 16,
    question: `In preparation for Mr. Kumar's <a href="#" data-toggle="popover-retirement">retirement</a> at the end of March, the Carolex Corporation will need to ----- a new 
    <a href="#" data-toggle="popover-facility">facilities</a> director
    <br>
    <a href="#" data-toggle="popover-resume">resume | </a>
    <a href="#" data-toggle="popover-compete">compete | </a>
    <a href="#" data-toggle="popover-recruit">recruit | </a>
    <a href="#" data-toggle="popover-conduct">conduct</a>`,
    answer: "(C) recruit",
    options: ["(A) resume", "(B) compete", "(C) recruit", "(D) conduct"],
    explain: `
    In preparation for Mr. Kumar's retirement at the end of March, the Carolex Corporation will need to recruit a new facilities director
    <br>
    Để chuẩn bị cho việc nghỉ hưu của ông Kumar vào cuối tháng 3, Carolex Corporation sẽ cần tuyển một giám đốc cơ sở mới.
    <br>
    `,
  },
  {
    numb: 17,
    question: `The team's <a href="#" data-toggle="popover-contribution">contributions</a> to 
    the Ripton Group's marketing plan were very ------- <a href="#" data-toggle="popover-acknowledge">acknowledged</a>
    <br>
    <a href="#" data-toggle="popover-favor">favor | </a>
    <a href="#" data-toggle="popover-favorably">favorably | </a>
    <a href="#" data-toggle="popover-favorable">favorable</a>`,
    answer: "",
    options: ["(A) favor", "(B) favorably", "(C) favorable", "(D) favored"],
    explain: `
    The team's contributions to the Ripton Group's marketing plan were very favorably acknowledged.
    <br>
    Những đóng góp của nhóm vào kế hoạch tiếp thị của Tập đoàn Ripton đã được ghi nhận một cách rất đáng mừng.
    <br>
    `,
  },
  {
    numb: 18,
    question: `------- receiving the engineering award, Ms. Kwon made a point of thanking longtime <a href="#" data-toggle="popover-mentor">mentors</a>
    <br>
    <a href="#" data-toggle="popover-Onto">Onto | </a>
    <a href="#" data-toggle="popover-Unlike">Unlike | </a>
    <a href="#" data-toggle="popover-About">About | </a>
    <a href="#" data-toggle="popover-Upon">Upon</a>
    `,
    answer: "(D) Upon",
    options: ["(A) Onto", "(B) Unlike", "(C) About", "(D) Upon"],
    explain: `
    Upon receiving the engineering award, Ms. Kwon made a point of thanking longtime mentors.
    <br>
    Khi nhận được giải thưởng kỹ sư, cô Kwon đã cảm ơn những người cố vấn lâu năm.
    <br>
    `,
  },
  {
    numb: 19,
    question: `Please read the list of ------- <a href="#" data-toggle="popover-qualification">qualifications</a> to 
    ensure that you have the necessary education and experience for the position
    <br>
    <a href="#" data-toggle="popover-slight">slight | </a>
    <a href="#" data-toggle="popover-equal">equal | </a>
    <a href="#" data-toggle="popover-obliged">obliged | </a>
    <a href="#" data-toggle="popover-essential">essential</a>`,
    answer: "(D) essential",
    options: ["(A) slight", "(B) equal", "(C) obliged", "(D) essential"],
    explain: `
    Please read the list of essential qualifications to ensure that you have the necessary education and experience for the position
    <br>
    Vui lòng đọc danh sách các bằng cấp cần thiết để đảm bảo rằng bạn có trình độ học vấn và kinh nghiệm cần thiết cho vị trí tuyển dụng
    <br>
    `,
  },
  {
    numb: 20,
    question: `Choosing the best software tool to <a href="#" data-toggle="popover-eliminate">eliminate</a> 
    computer viruses is <a href="#" data-toggle="popover-rarely">rarely</a> simple, ------- it is important to 
    <a href="#" data-toggle="popover-seek">seek</a> expert advice.`,
    answer: "(D) so",
    options: ["(A) why", "(B) then", "(C) nor", "(D) so"],
    explain: `
    Choosing the best software tool to eliminate computer viruses is rarely simple, so it is important to seek expert advice.
    <br>
    Lựa chọn công cụ phần mềm tốt nhất để loại bỏ vi rút máy tính hiếm khi đơn giản, vì vậy điều quan trọng là phải tìm lời khuyên của chuyên gia
    <br>
    `,
  },
];

let questions5 = [
  {
    numb: 21,
    question: `Ms. Delgado would like to meet with all <a href="#" data-toggle="popover-loan">loan</a> officers ------- reviewing any more loan applications.`,
    answer: "",
    options: ["(A) now that", "(B) as though", "(C) before", "(D) often"],
    explain: `
    Ms. Delgado would like to meet with all loan officers before reviewing any more loan applications.
    <br>
    Bà Delgado muốn gặp tất cả các nhân viên cho vay trước khi xem xét bất kỳ đơn xin vay nào nữa.
    <br>
    `,
  },
  {
    numb: 22,
    question: ` Cedar Branch Hill has a ------- as a business-friendly environment that provides <a href="#" data-toggle="popover-efficient">efficient</a> licensing and other 
    <a href="#" data-toggle="popover-legal">legal</a> processes.
    <br>
    <a href="#" data-toggle="popover-prediction">prediction | </a>
    <a href="#" data-toggle="popover-courtesy">courtesy | </a>
    <a href="#" data-toggle="popover-reputation">reputation | </a>
    <a href="#" data-toggle="popover-statement">statement</a>`,
    answer: "",
    options: [
      "(A) prediction",
      "(B) courtesy",
      "(C) reputation",
      "(D) statement",
    ],
    explain: `
    Cedar Branch Hill has a reputation as a business-friendly environment that provides efficient licensing and other legal processes.
    <br>
    Cedar Branch Hill nổi tiếng là một môi trường thân thiện với doanh nghiệp, cung cấp các quy trình cấp phép hiệu quả và các quy trình pháp lý khác.
    <br>
    `,
  },
  {
    numb: 23,
    question: `The actors <a href="#" data-toggle="popover-held">held</a> an additional 
    <a href="#" data-toggle="popover-rehearsal">rehearsal</a> ------- perfect their 
    <a href="#" data-toggle="popover-performance">performance</a> in the final <a href="#" data-toggle="popover-scene">scene</a>.
    <br>
    <a href="#" data-toggle="popover-considerably">considerably | </a>
    <a href="#" data-toggle="popover-nevertheless">nevertheless</a>`,
    answer: "(B) in order to",
    options: [
      "(A) considerably",
      "(B) in order to",
      "(C) nevertheless",
      "(D) as a result of",
    ],
    explain: `
    The actors held an additional rehearsal in order to perfect their performance in the final scene.
    <br>
    Các diễn viên đã tổ chức một buổi diễn tập bổ sung để hoàn thiện màn trình diễn của họ trong cảnh cuối cùng.
    <br>
    `,
  },
  {
    numb: 24,
    question: `RZT Technology will double the size of its Toronto 
    <a href="#" data-toggle="popover-laboratory">laboratory</a> to -------the organization's <a href="#" data-toggle="popover-rapid">rapid</a> 
    <a href="#" data-toggle="popover-growth">growth</a>.
    <br>
    <a href="#" data-toggle="popover-assign">assign | </a>
    <a href="#" data-toggle="popover-investigate">investigate | </a>
    <a href="#" data-toggle="popover-experience">experience | </a>
    <a href="#" data-toggle="popover-accommodate">accommodate</a>`,
    answer: "(D) accommodate",
    options: [
      "(A) assign",
      "(B) investigate",
      "(C) experience",
      "(D) accommodate",
    ],
    explain: `
    RZT Technology will double the size of its Toronto laboratory to accommodate the organization's rapid growth.
    <br>
    Công nghệ RZT sẽ tăng gấp đôi quy mô phòng thí nghiệm ở Toronto để đáp ứng sự phát triển nhanh chóng của tổ chức.
    <br>
    `,
  },
  {
    numb: 25,
    question: `Even though Smithton Electronics' second <a href="#" data-toggle="popover-quarter">quarter</a> was not -------, 
    the company plans to invest large sums on research.
    <br>
    <a href="#" data-toggle="popover-profitable">profitable | </a>
    <a href="#" data-toggle="popover-profiting">profiting | </a>
    <a href="#" data-toggle="popover-profitability">profitability | </a>
    <a href="#" data-toggle="popover-profitably">profitably</a>`,
    answer: "(A) profitable",
    options: [
      "(A) profitable",
      "(B) profiting",
      "(C) profitability",
      "(D) profitably",
    ],
    explain: `
    Even though Smithton Electronics' second quarter was not profitable, the company plans to invest large sums on research.
    <br>
    Mặc dù quý II của Smithton Electronics không có lãi, nhưng công ty vẫn có kế hoạch đầu tư một khoản lớn vào nghiên cứu.
    <br>
    `,
  },
];

let questions6 = [
  {
    numb: 26,
    question: `The Williamsport Hotel is an <a href="#" data-toggle="popover-ideal">ideal</a> 
    <a href="#" data-toggle="popover-venue">venue</a> for the <a href="#" data-toggle="popover-conference">conference</a> because of its ------- to the airport.
    <br>
    <a href="#" data-toggle="popover-achievement">achievement | </a>
    <a href="#" data-toggle="popover-proximity">proximity | </a>
    <a href="#" data-toggle="popover-competence">competence | </a>
    <a href="#" data-toggle="popover-exception">exception</a>`,
    answer: "(B) proximity",
    options: [
      "(A) achievement",
      "(B) proximity",
      "(C) competence",
      "(D) exception",
    ],
    explain: `
    The Williamsport Hotel is an ideal venue for the conference because of its proximity to the airport.
    <br>
    Khách sạn Williamsport là một địa điểm lý tưởng cho hội nghị vì gần sân bay.
    <br>
    `,
  },
  {
    numb: 27,
    question: `The second training session is for employees ------- <a href="#" data-toggle="popover-responsibility">responsibilities</a> include 
    processing <a href="#" data-toggle="popover-payroll">payroll</a> forms.`,
    answer: "(A) whose",
    options: ["(A) whose", "(B) which", "(C) what", "(D) who"],
    explain: `
    The second training session is for employees whose responsibilities include processing payroll forms.
    <br>
    Buổi đào tạo thứ hai dành cho những nhân viên có trách nhiệm bao gồm xử lý các biểu mẫu tính lương.
    <br>
    `,
  },
  {
    numb: 28,
    question: `------- poorly the high-speed printer may be <a href="#" data-toggle="popover-function">functioning</a>functioning, it is still making copies that are 
    <a href="#" data-toggle="popover-adequate">adequate</a> for our <a href="#" data-toggle="popover-purpose">purposes</a>.
    <br>
    <a href="#" data-toggle="popover-Rather">Rather | </a>
    <a href="#" data-toggle="popover-Seldom">Seldom | </a>
    <a href="#" data-toggle="popover-However">However | </a>
    <a href="#" data-toggle="popover-Thoroughly">Thoroughly</a>`,
    answer: "(C) However",
    options: ["(A) Rather", "(B) Seldom", "(C) However", "(D) Thoroughly"],
    explain: `
    However poorly the high-speed printer may be functioning, it is still making copies that are adequate for our purposes.
    <br>
    Tuy nhiên, máy in tốc độ cao có thể hoạt động kém, nó vẫn đang tạo ra các bản sao phù hợp cho mục đích của chúng tôi.
    <br>
    `,
  },
  {
    numb: 29,
    question: `The long-awaited Weka 2XG <a href="#" data-toggle="popover-digital">digital</a> camera will finally be ------- at a 
    product <a href="#" data-toggle="popover-exhibition">exhibition</a> on August 16.
    <br>
    <a href="#" data-toggle="popover-reduced">reduced | </a>
    <a href="#" data-toggle="popover-unveiled">unveiled | </a>
    <a href="#" data-toggle="popover-consulted">consulted | </a>
    <a href="#" data-toggle="popover-resolved">resolved</a>`,
    answer: "(B) unveiled",
    options: ["(A) reduced", "(B) unveiled", "(C) consulted", "(D) resolved"],
    explain: `
    The long-awaited Weka 2XG digital camera will finally be unveiled at a product exhibition on August 16.
    <br>
    Chiếc máy ảnh kỹ thuật số Weka 2XG được mong đợi từ lâu cuối cùng sẽ được ra mắt tại triển lãm sản phẩm vào ngày 16 tháng 8.
    <br>
    `,
  },
  {
    numb: 30,
    question: `Northeast <a href="#" data-toggle="popover-Community">Community</a> Finance ------- an online system 
    in order to shorten service lines at branch locations.
    <br>
    <a href="#" data-toggle="popover-implement">implement</a>`,
    answer: "(A) has implemented",
    options: [
      "(A) has implemented",
      "(B) to be implementing",
      "(C) to have been implementing",
      "(D) is implemented",
    ],
    explain: `
    Northeast Community Finance has implemented an online system in order to shorten service lines at branch locations.
    <br>
    Tài chính Cộng đồng Đông Bắc đã triển khai một hệ thống trực tuyến nhằm rút ngắn đường truyền dịch vụ tại các địa điểm chi nhánh.
    <br>
    `,
  },
];
