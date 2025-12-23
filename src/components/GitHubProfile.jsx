import React from 'react';
import avatar from '../assets/images/john-doe-about.jpg';
import './GitHubProfile.css';

export default function GitHubProfile({ user = { name: 'John Doe', repos: 1, followers: 16 } }) {
  return (
    <div className="github-card">
      <div className="avatar">
        <img src={avatar} alt={`${user.name} avatar`} loading="lazy" />
      </div>
      <div className="meta">
        <h4>{user.name}</h4>
        <p>Repos: {user.repos} • Followers: {user.followers}</p>
      </div>
    </div>
  );
}
