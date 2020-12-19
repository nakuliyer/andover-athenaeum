import Head from 'next/head'
import React from 'react'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Andover Athenaeum</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />
      </Head>
      <div className="w-screen relative">
        <img
          src="/assets/rome_basic.jpg"
          alt="Photo by Mike Andrei from Pexels"
          className="w-full object-cover"
          style={{ maxHeight: 700, filter: 'brightness(0.6)' }}
        />
        <h1
          className="absolute cinzel-lg text-center text-white w-11/12"
          style={{ top: 'min(25vw, 300px)', left: '4.2%' }}
        >
          Phillips Academy’s Classics Magazine
        </h1>
        <button
          type="button"
          className="absolute roman inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          style={{
            width: 323,
            top: 'min(45vw, 400px)',
            left: 'calc(50vw - 162px)'
          }}
        >
          <svg
            fill="none"
            viewBox="0 0 24 24"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="M4 6.6335C4.13986 6.57696 4.308 6.51452 4.50288 6.45153C5.19213 6.22874 6.21301 6 7.5 6C8.78699 6 9.80787 6.22874 10.4971 6.45153C10.692 6.51452 10.8601 6.57696 11 6.6335V17.5129C10.1488 17.2485 8.96016 17 7.5 17C6.03984 17 4.85122 17.2485 4 17.5129V6.6335ZM12 4.88528C11.7743 4.78519 11.4765 4.66622 11.1123 4.54847C10.2546 4.27126 9.02551 4 7.5 4C5.97449 4 4.74537 4.27126 3.88775 4.54847C3.45896 4.68707 3.12235 4.82736 2.88689 4.93656C2.76911 4.99119 2.67645 5.03812 2.61002 5.07329C2.5768 5.09089 2.55011 5.10555 2.5301 5.11679L2.5051 5.131L2.49638 5.13607L2.49297 5.13807L2.49151 5.13893C2.48954 5.1401 2.2451 5.28495 2.4902 5.13971C2.18633 5.31978 2 5.64679 2 6V19C2 19.3593 2.19275 19.691 2.50493 19.8689C2.8169 20.0466 3.20021 20.0435 3.50921 19.8606C3.50648 19.8622 3.50477 19.8632 3.50477 19.8632L3.50609 19.8625L3.50765 19.8616L3.50921 19.8606C3.51529 19.8572 3.52757 19.8505 3.54599 19.8408C3.58283 19.8213 3.64398 19.7901 3.72834 19.7509C3.89718 19.6726 4.15822 19.5629 4.50288 19.4515C5.19213 19.2287 6.21301 19 7.5 19C8.78699 19 9.80787 19.2287 10.4971 19.4515C10.8418 19.5629 11.1028 19.6726 11.2717 19.7509C11.356 19.7901 11.4172 19.8213 11.454 19.8408C11.4724 19.8505 11.4847 19.8573 11.4908 19.8608C11.4936 19.8623 11.4952 19.8632 11.4952 19.8632M11.4952 19.8632L11.4939 19.8625L11.4924 19.8616L11.4908 19.8608C11.8048 20.0462 12.1954 20.0463 12.5092 19.8606C12.5153 19.8572 12.5276 19.8505 12.546 19.8408C12.5828 19.8213 12.644 19.7901 12.7283 19.7509C12.8972 19.6726 13.1582 19.5629 13.5029 19.4515C14.1921 19.2287 15.213 19 16.5 19C17.787 19 18.8079 19.2287 19.4971 19.4515C19.8418 19.5629 20.1028 19.6726 20.2717 19.7509C20.356 19.7901 20.4172 19.8213 20.454 19.8408C20.4724 19.8505 20.4847 19.8573 20.4908 19.8608L20.4919 19.8613C20.8007 20.0435 21.1835 20.0464 21.4951 19.8689C21.8072 19.691 22 19.3593 22 19V6C22 5.64679 21.8137 5.31978 21.5098 5.13971L21.5085 5.13893L21.507 5.13807L21.5036 5.13607L21.4949 5.131L21.4699 5.11679C21.4499 5.10555 21.4232 5.09089 21.39 5.07329C21.3236 5.03812 21.2309 4.99119 21.1131 4.93656C20.8776 4.82736 20.541 4.68707 20.1123 4.54847C19.2546 4.27126 18.0255 4 16.5 4C14.9745 4 13.7454 4.27126 12.8877 4.54847C12.5235 4.66622 12.2257 4.78519 12 4.88528M20 6.6335V17.5129C19.1488 17.2485 17.9602 17 16.5 17C15.0398 17 13.8512 17.2485 13 17.5129V6.6335C13.1399 6.57696 13.308 6.51452 13.5029 6.45153C14.1921 6.22874 15.213 6 16.5 6C17.787 6 18.8079 6.22874 19.4971 6.45153C19.692 6.51452 19.8601 6.57696 20 6.6335ZM20.4908 6.86075C20.4935 6.86228 20.4952 6.86325 20.4952 6.86325L20.4939 6.86248L20.4908 6.86075ZM20.4908 19.8608L20.4941 19.8626L20.4919 19.8613"
              fill="#0D0D0D"
            />
          </svg>
          &emsp;Read Our Latest Issue!
        </button>
      </div>
      <div className="mt-6 sm:mt-12">
        <h1 className="mx-auto title">A Letter from the Founders</h1>
        <div className="mx-auto prose article two-column prose-indigo prose-lg text-gray-500">
          <p>
            Welcome to Andover Athenaeum, Phillips Academy’s
            Classics Magazine! This is a place for discussion,
            creativity, and general awareness of the Classics, both
            at Andover and in the world. In this installment, we
            focus on Broadening Our View of the Classics.
          </p>
          <p>
            Classics, the study of Ancient Greek and Latin and their
            respective history, philosophy, and literature, is one
            of the cornerstones of the Humanities. Its profound
            impact on areas such as law, politics, and philosophy is
            clear even in the modern day, more than two millennia
            later. The works of Homer, Aristotle, Ovid, Virgil,
            Marcus Aurelius, and countless others have been
            recreated and referenced in all aspects of the modern
            world, whether it be literature, architecture, or
            politics.
          </p>
          <p>
            The impact of the Classics is prominent on our campus:
            the Doric columns of Samuel Phillips Hall, the
            graduation awards (cum laude, magna cum laude, summa cum
            laude), and our school mottos (non sibi, finis origine
            pendet). The roots of the Classical languages are seen
            everyday in Bulfinch Hall (Over 60% of English has
            Ancient Greek or Latin roots), Euclidean Geometry is
            hard to miss in our introductory mathematics courses,
            and the resounding echoes of the Julian calendar are
            unmistakable as we plan out our weeks in Andover
            planners.
          </p>
          <p>
            Pearson Hall stands proudly in the school’s busiest
            quadrangle, flanked by its frosh-faced counterparts
            Morse Hall and Oliver Wendell Holmes Library (OWHL). It
            has been the home of Phillips Academy’s Classics
            Department for over 200 years and recently welcomed the
            Tang Institute and Academic Skills Center during the
            OWHL renovation as well. Not many high schools, let
            alone universities in the world have their own Classics
            building.
          </p>
          <p>
            And yet, interest in the Classics has declined severely
            throughout the 20th and early 21st centuries. It has
            been abandoned and neglected by many, viewed as a
            subject for elites and “people with nothing else better
            to do.” Ancient Greek and Latin are “dead languages.”
            That is the harsh reality of the modern perspective of
            Classics, both at Andover and in the world as a whole.
          </p>
          <p>
            Andover Athenaeum is here to revitalize our collective
            understanding and perspective on the Classics. You’ll
            read about the new and upcoming students and researchers
            in the Classics world, some who reside on this very
            campus. You’ll immerse yourself in dozens of literary
            compositions and essays written by students, alumni, and
            other Classicists in the world. You’ll even get to read
            about the impact of Classics on this very campus,
            whether it be the variety of inscriptions scattered
            across campus or the physical heart of Classics here at
            Phillips Academy: Pearson Hall.
          </p>
          <p>
            Welcome to the world of the Classics in Andover
            Athenaeum!
          </p>
        </div>
      </div>
    </div>
  )
}
