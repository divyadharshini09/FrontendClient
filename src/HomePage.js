import React, { useState, useEffect } from 'react';
import './HomePage.css';

// Utility functions to manage local storage
const saveToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const loadFromLocalStorage = (key, defaultValue) => {
  const storedValue = localStorage.getItem(key);
  return storedValue ? JSON.parse(storedValue) : defaultValue;
};

// Initial data (only used if local storage is empty)
const defaultPosts = [
  { id: 1, content: 'Post 1: This is an example post.', image: null, profilePicture: null },
  { id: 2, content: 'Post 2: Another example post.', image: null, profilePicture: null },
  { id: 3, content: 'Post 3: Yet another example post.', image: null, profilePicture: null },
];

const defaultProfile = {
  name: '',
  email: '',
  bio: '',
  profilePicture: null,
};

const defaultFriendRequests = [
  { id: 1, name: 'Amritha', profilePicture: null },
  { id: 2, name: 'Ashika', profilePicture: null },
];

const defaultFriends = [
  { id: 1, name: 'John Doe', profilePicture: null },
  { id: 2, name: 'Jane Smith', profilePicture: null },
];

const HomePage = () => {
  // State declarations
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(''); // 'profile', 'posts', 'uploadPost', 'friendRequests', 'addFriendRequest'
  const [posts, setPosts] = useState(loadFromLocalStorage('posts', defaultPosts));
  const [newPostContent, setNewPostContent] = useState('');
  const [newPostImage, setNewPostImage] = useState(null);
  const [editingPostId, setEditingPostId] = useState(null);
  const [editingContent, setEditingContent] = useState('');
  const [editingImage, setEditingImage] = useState(null);
  const [profile, setProfile] = useState(loadFromLocalStorage('profile', defaultProfile));
  const [friendRequests, setFriendRequests] = useState(
    loadFromLocalStorage('friendRequests', defaultFriendRequests)
  );
  const [friends, setFriends] = useState(loadFromLocalStorage('friends', defaultFriends));
  const [newFriendRequestName, setNewFriendRequestName] = useState('');
  const [newFriendRequestProfilePicture, setNewFriendRequestProfilePicture] = useState(null);

  // Save to local storage whenever posts, profile, friendRequests, or friends change
  useEffect(() => {
    saveToLocalStorage('posts', posts);
  }, [posts]);

  useEffect(() => {
    saveToLocalStorage('profile', profile);
  }, [profile]);

  useEffect(() => {
    saveToLocalStorage('friendRequests', friendRequests);
  }, [friendRequests]);

  useEffect(() => {
    saveToLocalStorage('friends', friends);
  }, [friends]);

  // Cleanup URL object when profile picture changes
  useEffect(() => {
    return () => {
      if (profile.profilePicture) {
        URL.revokeObjectURL(profile.profilePicture);
      }
    };
  }, [profile.profilePicture]);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Handle section click
  const handleSectionClick = (section) => {
    setActiveSection(section);
    setIsSidebarOpen(false);
  };

  // Handle new post creation
  const handleNewPost = () => {
    if (newPostContent.trim() === '') {
      alert('Post content cannot be empty.');
      return;
    }

    const newPost = {
      id: posts.length + 1,
      content: newPostContent,
      image: newPostImage ? URL.createObjectURL(newPostImage) : null,
      profilePicture: profile.profilePicture ? URL.createObjectURL(profile.profilePicture) : null,
    };

    setPosts([...posts, newPost]);
    setNewPostContent('');
    setNewPostImage(null);
    setActiveSection(''); // Optionally close the upload post section
  };

  // Edit an existing post
  const handleEditPost = (postId) => {
    const post = posts.find((p) => p.id === postId);
    if (post) {
      setEditingPostId(postId);
      setEditingContent(post.content);
      setEditingImage(null);
    }
  };

  // Save edited post
  const handleSaveEdit = () => {
    setPosts(
      posts.map((post) =>
        post.id === editingPostId
          ? {
              ...post,
              content: editingContent,
              image: editingImage ? URL.createObjectURL(editingImage) : post.image,
            }
          : post
      )
    );
    setEditingPostId(null);
    setEditingContent('');
    setEditingImage(null);
  };

  // Delete a post
  const handleDeletePost = (postId) => {
    setPosts(posts.filter((post) => post.id !== postId));
  };

  // Handle profile changes
  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  // Handle profile picture change
  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    setProfile({ ...profile, profilePicture: file });
  };

  // Save profile
  const handleSaveProfile = () => {
    alert('Profile saved!');
  };

  // Accept friend request
  const handleAcceptFriendRequest = (requestId) => {
    const request = friendRequests.find((request) => request.id === requestId);
    if (request) {
      setFriends([...friends, request]);
      setFriendRequests(friendRequests.filter((request) => request.id !== requestId));
      alert('Friend request accepted!');
    }
  };

  // Reject friend request
  const handleRejectFriendRequest = (requestId) => {
    setFriendRequests(friendRequests.filter((request) => request.id !== requestId));
    alert('Friend request rejected!');
  };

  // Add friend request
  const handleAddFriendRequest = () => {
    if (newFriendRequestName.trim() === '') {
      alert('Name cannot be empty.');
      return;
    }

    const newRequest = {
      id: friendRequests.length + 1,
      name: newFriendRequestName,
      profilePicture: newFriendRequestProfilePicture
        ? URL.createObjectURL(newFriendRequestProfilePicture)
        : null,
    };

    setFriendRequests([...friendRequests, newRequest]);
    setNewFriendRequestName('');
    setNewFriendRequestProfilePicture(null);
    setActiveSection('friendRequests'); // Automatically switch to friend requests section
  };

  // Remove a friend
  const handleRemoveFriend = (friendId) => {
    setFriends(friends.filter((friend) => friend.id !== friendId));
  };

  // Render posts
  const renderPosts = () => {
    return posts.map((post) => (
      <div key={post.id} className="post">
        {post.profilePicture && (
          <img src={post.profilePicture} alt="Profile" className="profile-picture" />
        )}
        <p>{post.content}</p>
        {post.image && <img src={post.image} alt="Post" className="post-image" />}
        {editingPostId === post.id ? (
          <div className="editing-post">
            <textarea
              value={editingContent}
              onChange={(e) => setEditingContent(e.target.value)}
              placeholder="Edit your post content"
            ></textarea>
            <br />
            <input type="file" accept="image/*" onChange={(e) => setEditingImage(e.target.files[0])} />
            <button onClick={handleSaveEdit}>Save</button>
            <button onClick={() => setEditingPostId(null)}>Cancel</button>
            <br />
          </div>
        ) : (
          <>
            <br />
            <button onClick={() => handleEditPost(post.id)}>Edit</button>
            <button onClick={() => handleDeletePost(post.id)}>Delete</button>
          </>
        )}
      </div>
    ));
  };

  // Render friend requests
  const renderFriendRequests = () => {
    return friendRequests.length === 0 ? (
      <p>No friend requests</p>
    ) : (
      friendRequests.map((request) => (
        <div key={request.id} className="friend-request">
          {request.profilePicture && (
            <img src={request.profilePicture} alt="Profile" className="profile-picture" />
          )}
          <p>{request.name}</p>
          <button onClick={() => handleAcceptFriendRequest(request.id)}>Accept</button>
          <button onClick={() => handleRejectFriendRequest(request.id)}>Reject</button>
        </div>
      ))
    );
  };

  // Render friends
  const renderFriends = () => {
    return friends.length === 0 ? (
      <p>No friends</p>
    ) : (
      friends.map((friend) => (
        <div key={friend.id} className="friend">
          {friend.profilePicture && (
            <img src={friend.profilePicture} alt="Profile" className="profile-picture" />
          )}
          <p>{friend.name}</p>
          <button onClick={() => handleRemoveFriend(friend.id)}>Remove Friend</button>
        </div>
      ))
    );
  };

  return (
    <div className="container">
      <div className={`hamburger-icon ${isSidebarOpen ? 'open' : ''}`} onClick={toggleSidebar}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      
      <aside className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
        {profile.profilePicture && (
          <div className="sidebar-profile">
            <img
              src={profile.profilePicture ? URL.createObjectURL(profile.profilePicture) : ''}
              alt="Profile"
              className="sidebar-profile-picture"
            />
            <p>{profile.name}</p>
          </div>
        )}
        <br></br>
        <br></br>
        <button onClick={() => handleSectionClick('profile')}>Profile</button>
        <button onClick={() => handleSectionClick('posts')}>Posts</button>
        <button onClick={() => handleSectionClick('uploadPost')}>Upload Post</button>
        <button onClick={() => handleSectionClick('friendRequests')}>Friend Requests</button>
        <button onClick={() => handleSectionClick('addFriendRequest')}>Add Friend Request</button>
      </aside>

      <main className="main-content">
        {activeSection === 'profile' && (
          <div className="section-content">
            <h2>Profile Settings</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSaveProfile();
              }}
            >
              <div>
                <label>Name:</label>
                <input type="text" name="name" value={profile.name} onChange={handleProfileChange} />
              </div>
              <br />
              <div>
                <label>Email:</label>
                <input type="email" name="email" value={profile.email} onChange={handleProfileChange} />
              </div>
              <br />
              <div>
                <label>Bio:</label>
                <textarea name="bio" value={profile.bio} onChange={handleProfileChange}></textarea>
              </div>
              <br />
              <div>
                <label>Profile Picture:</label>
                <input type="file" accept="image/*" onChange={handleProfilePictureChange} />
              </div>
              <br />
              <button type="submit">Save Profile</button>
              <button type="button" onClick={() => setActiveSection('')}>Back to Main Lobby</button>
            </form>
            <h3>Friends</h3>
            {renderFriends()}
          </div>
        )}
        {(activeSection === 'posts' || activeSection === '') && (
          <div className="section-content">
            <h2>Main Lobby</h2>
            {renderPosts()}
          </div>
        )}
        {activeSection === 'uploadPost' && (
          <div className="section-content">
            <h2>Create a New Post</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleNewPost();
              }}
            >
              <textarea
                value={newPostContent}
                onChange={(e) => setNewPostContent(e.target.value)}
                placeholder="What's on your mind?"
              ></textarea>
              <br />
              <br />
              <input type="file" accept="image/*" onChange={(e) => setNewPostImage(e.target.files[0])} />
              <br />
              <br />
              <button type="submit">Post</button>
              <button type="button" onClick={() => setActiveSection('')}>Back to Main Lobby</button>
            </form>
          </div>
        )}
        {activeSection === 'friendRequests' && (
          <div className="section-content">
            <h2>Friend Requests</h2>
            {renderFriendRequests()}
            <button type="button" onClick={() => setActiveSection('')}>Back to Main Lobby</button>
          </div>
        )}
        {activeSection === 'addFriendRequest' && (
          <div className="section-content">
            <h2>Add New Friend</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleAddFriendRequest();
              }}
            >
              <div>
                <label>Find User:</label>
                <input
                  type="text"
                  value={newFriendRequestName}
                  onChange={(e) => setNewFriendRequestName(e.target.value)}
                />
              </div>
              <br />
              <br />
              <button type="submit">Add Friend</button>
              <button type="button" onClick={() => setActiveSection('')}>Back to Main Lobby</button>
            </form>
          </div>
        )}
      </main>
      <div>
        <center>
        <h1 id="log">chit<b>Chatter</b></h1>
        </center>
      </div>
    </div>
    
  );
};

export default HomePage;
