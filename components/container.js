export default function Container() {
  return (
    <section className="px-6 h-container sleek-scrollbar">
      <div className="grid gap-8 row-gap-10 grid-cols-3">
        <div className="h-64 bg-white shadow-lg">
          <img
            className="h-40 w-full object-cover"
            src="https://img-a.udemycdn.com/course/750x422/500730_4e19_2.jpg"
          />
          <div className="h-16 w-full px-2 mt-1">
            <div className="font-bold text-base truncate">
              Getting started in 3D Animation
            </div>
            <div className="text-sm text-gray-600 truncate">
              Create professional-level, 3D character animations in record time
              for a variety of applications.
            </div>
            <div className="flex w-full justify-between">
              <div>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
              </div>
              <img src="/assets/cards-heart-outline.svg" />
            </div>
            <div className="text-xs">
              <span className="text-gray-600">Source:</span> <span>Udemy</span>
            </div>
          </div>
        </div>
        <div className="h-64 bg-white shadow-lg">
          <img
            className="h-40 w-full object-cover"
            src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/99/7ab7c00f7b11e79b617dbb2116532d/contractnegotiations_Logo_080814d.jpg?auto=format%2Ccompress&dpr=1&w=160&h=160&fit=fill&bg=FFF"
          />
          <div className="h-16 w-full px-2 mt-1">
            <div className="font-bold text-base  truncate">
              Successful Negotiation: Essential Strategies and Skills
            </div>
            <div className="text-sm text-gray-600 truncate">
              No description
            </div>
            <div className="flex w-full justify-between">
              <div>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
              </div>
              <img src="/assets/cards-heart.svg" />
            </div>
            <div className="text-xs">
              <span className="text-gray-600">Source:</span>{" "}
              <span>Coursera</span>
            </div>
          </div>
        </div>
        <div className="h-64 bg-white shadow-lg"></div>
        <div className="h-64 bg-white shadow-lg"></div>
        <div className="h-64 bg-white shadow-lg"></div>
        <div className="h-64 bg-white shadow-lg"></div>
      </div>
    </section>
  );
}
