import React from "react";
import {
  Globe,
  Mail,
  Phone,
  Instagram,
  Twitter,
  Facebook,
  Youtube,
  UserPlus,
  Award,
  Building2,
} from "lucide-react";

interface ProfileCardProps {
  name: string;
  role: string;
  license: string;
  bio: string;
  website: string;
  experience: string;
  company: string;
}

const ProfileCard = ({
  name = "Emma Green",
  role = "Agent & Team Leader @ Blue Banks Realty LLC",
  license = "01753779",
  bio = "Principal and Founder of GreenHouse team. Miami Beach native – I spend time golfing, walking my dogs, and helping clients find their dream home.",
  website = "emmagreen.com",
  experience = "10+ years",
  company = "GreenHouse",
}: ProfileCardProps) => {
  return (
    <div className="">
      <div className="w-full max-w-3xl bg-primary-dark border border-primary-light rounded-xl shadow-2xl p-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <img
              src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-secondary-dark"
            />
          </div>

          {/* Content */}
          <div className="flex-grow">
            {/* Badges */}
            <div className="flex gap-3 mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary-ash text-neutrals-light">
                <Award className="w-4 h-4 mr-2" />
                {experience}
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary-ash text-neutrals-light">
                <Building2 className="w-4 h-4 mr-2" />
                {company}
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary-ash text-neutrals-light">
                Team Leader
              </span>
            </div>

            {/* Name and Role */}
            <h1 className="text-3xl font-bold text-neutrals-light mb-2">
              {name}
            </h1>
            <p className="text-primary-muted mb-1">{role}</p>
            <p className="text-primary-muted text-sm mb-4">
              License number — {license}
            </p>

            {/* Bio */}
            <p className="text-neutrals-light mb-6">{bio}</p>

            {/* Social Links */}
            <div className="flex gap-4 mb-6">
              <a
                href="#"
                className="text-primary-muted hover:text-secondary-dark transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-primary-muted hover:text-secondary-dark transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-primary-muted hover:text-secondary-dark transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-primary-muted hover:text-secondary-dark transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-primary-muted hover:text-secondary-dark transition-colors"
              >
                <Globe className="w-5 h-5" />
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="inline-flex items-center px-6 py-2 rounded-lg bg-secondary-dark hover:bg-secondary-light text-neutrals-light transition-colors">
                <UserPlus className="w-4 h-4 mr-2" />
                Follow
              </button>
              <button className="inline-flex items-center px-6 py-2 rounded-lg border border-primary-muted text-primary-muted hover:border-secondary-dark hover:text-secondary-dark transition-colors">
                <Mail className="w-4 h-4 mr-2" />
                Send Email
              </button>
              <button className="inline-flex items-center px-6 py-2 rounded-lg border border-primary-muted text-primary-muted hover:border-secondary-dark hover:text-secondary-dark transition-colors">
                <Phone className="w-4 h-4 mr-2" />
                Show Phone Number
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
