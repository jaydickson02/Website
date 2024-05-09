// pages/cv.js
import React from 'react';
import Link from 'next/link';
import Layout from '../components/layout';

export default function CV() {
    return (
        <Layout activeLink={'/cv'}>
        <div className="container mx-auto p-4">
            
            <div className="flex flex-row flex-wrap">

<div className="w-full lg:w-1/3 p-4">
    {/* Profile */}
    <div className="mb-4">
        <h2 className="text-2xl font-semibold">Profile</h2>
        <p>Enthusiastic Aerospace Engineering student at RMIT with a strong passion for space technology and software development. Committed to academic excellence and continuous self-improvement. Skilled in developing personal projects and dedicated to staying current with industry trends. Eager to contribute to the aerospace and technology sectors.</p>
    </div>
        <br></br>
    {/* Contact */}
    <div className="mb-4">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <ul>
            <li>Mobile: <em>0412592380</em></li>
            <li>Email: <em>jaydickson02@gmail.com</em></li>
            <li><Link href="https://www.linkedin.com/in/jay-dickson-152205149/">Linkedin</Link></li>
        </ul>
    </div>
    <br></br>

    {/* Skills */}
    <div className="mb-4">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <h2 className="text-1xl font-semibold">Design and Analysis Tools</h2>
        <ul className="list-disc pl-5">
            <li>Solidworks, Catia, AutoCAD, Fusion360, Ansys, STK, Abaqus CAE, eLaminate</li>
        </ul>
        <h2 className="text-1xl font-semibold">Software and Programming</h2>
        <ul className="list-disc pl-5">
            <li>Python, JavaScript, SQL, React, MATLab, C#, Microsoft and Google Suite, Google Admin, Active Directory, Windows, MacOS, Unix/Linux, Command Line Tools</li>
        </ul>
        <h2 className="text-1xl font-semibold">Administration</h2>
        <ul className="list-disc pl-5">
        <li>Technical Writing, Literature Reviews, Kanban Boards, Agile Workflow</li>
        </ul>
    </div>

    <br></br>
    {/* Education */}
    <div className="mb-4">
        <h2 className="text-2xl font-semibold">Education</h2>
        <p>Bachelor of Aerospace Engineering, RMIT, 2020-Present</p>
        <p>Partial Degrees in IT and Science, RMIT, 2017-2020</p>
        <p>Victorian Certificate of Education, Montmorency High School, 2012-2017</p>
    </div>

    <br></br>
    {/* Training */}
    <div className="mb-4">
        <h2 className="text-2xl font-semibold">Training</h2>
        <p>HLTAID011: Provide first aid</p>
        <p>HLTAID009: Provide cardiopulmonary resuscitation</p>
        <p>HLTAID010: Provide basic emergency life support</p>
    </div>
</div>

<div className="w-full lg:w-1/2 p-4 ml-32">
    {/* Experience */}
    <div className="mb-4">
        <h2 className="text-2xl font-semibold">Experience</h2>
        <p><strong>Digital Technology Officer</strong>, St Martin of Tours Primary School, 2019 - Present</p>
        <ul className="list-disc pl-5">
            <li>Developed a dual-purpose internal communication system that serves as both an administrative note repository for the IT team and a staff loan management platform, effectively streamlining multiple organisational processes.</li>
            <li>Overhauled the website interface to boost student enrollment rates and foster greater community engagement through user-friendly design and targeted content.</li>
            <li>Created a robust internal intranet, simplifying access to essential tools and significantly boosting staff productivity.</li>
            <li>Modernised the ticket management system, resulting in quicker response times and faster resolution, thereby elevating staff and student satisfaction.</li>
        </ul>
    </div>
    <br></br>
    {/* University Projects */}
    <div className="mb-4">
        <h2 className="text-2xl font-semibold">University Projects</h2>
        <p className="text-1xl font-semibold">Design of a vehicle that can traverse both Martian moons</p>
        <p className="text-1xl font-semibold">Deep Q Learning for the management of distributed satellite systems</p>
        <p className="text-1xl font-semibold">Re-design of a PC9 aircraft wing</p>
    </div>
    <br></br>
    {/* Extracurricular Activities */}
    <div className="mb-4">
        <h2 className="text-2xl font-semibold">Extracurricular Activities</h2>
        <p>Independent Developer: Develop apps and games as skill improvement projects. Projects are published on www.jaydickson.net</p>
        <p>ITS Hackathon - Multi-year participant</p>
        <p>Science Communication - Writer of articles on Medium</p>
        <p>Australian Tennis Open - Customer experience ambassador</p>
    </div>
</div>


            </div>
        </div>
        </Layout>
    );
}
