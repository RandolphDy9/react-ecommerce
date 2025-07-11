import StarIcon from "@/assets/icons/star.svg";

const SocialProof = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Loved by 10,000+ Customers</h2>
          <p className="text-gray-600">See what our community is saying about Drape</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Sarah M.",
              review: "Amazing quality and fit! The fabric is so soft and the designs are unique.",
              rating: 5,
            },
            { name: "Mike R.", review: "Best t-shirts I've ever owned. Great customer service too!", rating: 5 },
            { name: "Emma L.", review: "Love the sustainable approach and the comfort is unmatched.", rating: 5 },
          ].map((testimonial, index) => (
            <div key={index} className="bg-white border rounded shadow p-6">
              <div className="p-0 space-y-4">
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <img src={StarIcon} key={i} className="w-4 h-4" />
                  ))}
                </div>
                <p className="text-gray-700 italic">"{testimonial.review}"</p>
                <div className="font-semibold text-gray-900">- {testimonial.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SocialProof;